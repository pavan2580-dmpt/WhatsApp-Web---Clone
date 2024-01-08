const express = require('express');
const router = express.Router(); 

const Clients = require('../models/Clients');
const Phone = require('../models/Mobile')
const MyContacts = require("../models/MyContacts")
router.use(express.json());


// function for phone number
async function generateUniquePhoneNumber() {
  let isUnique = false;
  let finalNumber = '';

  while (!isUnique) {
    finalNumber = '';
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      finalNumber += randomNumber;
    }

    const checkNumber = await Phone.findOne({ number: finalNumber });

    if (!checkNumber) {
      isUnique = true;
      const insert = await Phone.create({number : finalNumber})
    }
  }

  return finalNumber;
}

// @ user details
router.route('/UserDetails').post(async (req, res) => {
  const { email, name, about, picture } = req.body;

  if (!email || !name || !about || !picture) {
    return res.status(400).json({ error: 'Incomplete user details provided.' });
  }

  try {
    const existingUser = await Clients.findOne({ email });

    if (!existingUser) {
      const final = await generateUniquePhoneNumber();

      const createdUser = await Clients.create({
        username: name,
        email,
        phNo: final,
        about,
        image: picture,
      });

      return res.status(200).json({
        id: createdUser._id,
        name:createdUser.username,
        email:createdUser.email,
        image: createdUser.image,
        phno: createdUser.phNo,
        About: createdUser.about,
      });
    } else {
      return res.status(200).json({
        id: existingUser._id,
        name:existingUser.username,
        email: existingUser.email,
        image: existingUser.image,
        phno: existingUser.phNo,
        About: existingUser.about,
      });
    }
  } catch (error) {
    console.error(error); 
    return res.status(500).send('Internal Server Error');
  }
});



// @ Add a contact to Client contact Db

router.route("/AddContact").post(async(req,res)=>{
  try {
    const {tel,MyId} = req.body;
    if(tel && MyId){
      const AboutTel = await Clients.findOne({phNo:tel})
      if(AboutTel)
       {

        const FindNumber = await MyContacts.findOne({MyId:MyId,phno:AboutTel.phNo})
        if(FindNumber){
          res.status(200).json({"ID":FindNumber._id,'name':FindNumber.name,"image":FindNumber.image,"phone":FindNumber.phno,"type":'old'})
        }
        else{
          const INSERT  = await MyContacts.create({
            MyId:MyId,
            name:AboutTel.username,
            image:AboutTel.image,
            phno:AboutTel.phNo
          })
          res.status(200).json({'name':AboutTel.username,"image":AboutTel.image,"phone":AboutTel.phNo,"type":'new'})
        }
       }
      else
        res.send("No user found on that mobile number")
    }
    else
      res.send("Empty filed number")

  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal Server Error');
   
  }
})



// @ get the specifi user contacts..

router.route('/UserContacts').post(async(req,res)=>{
  try {
    const {UserId} = req.body;
   if(UserId){
    const getData =await MyContacts.find({MyId:UserId})
        if(getData) 
          res.send(getData)
        else 
          res.send("No Contacts found")
   }
   else res.send("Empty field")
  } catch (error) {
    res.status(500).send("internal server error")
    console.log(error);
  }
})

module.exports = router