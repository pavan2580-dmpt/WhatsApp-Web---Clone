import axios from 'axios';
import Cookies from 'js-cookie';
import React,{useState} from 'react'

function AddUser() {

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // =====================
    if(phoneNumber.length == 10){
      const resp = await axios.post('http://localhost:5000/api/AddContact',{
        tel:phoneNumber,
        MyId:Cookies.get('UserId')
      })
      if(resp.status){
        console.log(resp.data)
      }
      else{
        alert(resp.data)
      }
    }
    else{
      alert("invalid number")
    }
    // ========================
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <>
    
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Contact Number</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2 font-semibold">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#00a884] placeholder-gray-400"
            required
          />
        </div>
        <input
          type="submit"
          className="w-full py-2 bg-[#00a884] text-white rounded-md font-semibold hover:bg-[#1e7965]
           focus:outline-none focus:bg-[#1e7965] transition-all"
           value={'Add'}
       />
          
      
      </form>
    </div>
    
    
    </>
  )
}

export default AddUser