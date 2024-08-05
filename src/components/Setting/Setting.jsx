import React, { useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { IoClose } from "react-icons/io5";
import { toast, Toaster } from 'react-hot-toast';

const Setting = () => {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('+91');
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleverifyotp = () => {
    if (otp) {
      toast.success("Otp is verified");
    } else {
      toast.error("Renter the Otp");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen font-montserrat'>
      <Toaster />
      <div className="relative w-full max-w-md p-6 mt-20 bg-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <h1 className='text-3xl text-gray-200 mb-5'>Change UserName</h1>
          <form className="flex flex-col items-center w-full">
            <input 
              type="text" 
              placeholder="Enter new username" 
              value={username} 
              onChange={handleUsernameChange} 
              className="w-full p-3 mb-3 bg-gray-200 text-black rounded-md outline-none"
            />
            <button 
              type="submit" 
              disabled={username.length < 3} 
              className='text-white bg-blue-600 p-3 rounded-full transition-transform transform hover:scale-105 active:scale-95'
            >
              Save Changes
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className='text-3xl text-gray-200 mb-5'>Change Phone Number</h1>
          <form className="flex flex-col items-center w-full">
            <input 
              placeholder="Enter new phone number"
              name='newNumber'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              minLength={10}
              required
              className="w-full p-3 mb-3 bg-gray-200 text-black rounded-md outline-none"
            />
            <input 
              placeholder="Re-enter new phone number"
              name='confirmNumber'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              minLength={10}
              required
              className="w-full p-3 mb-3 bg-gray-200 text-black rounded-md outline-none"
            />
          </form>
          <button 
            type="button" 
            className='bg-blue-600 text-white py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 disabled:opacity-50'
            onClick={() => document.getElementById('otpModal').classList.remove('hidden')}
            disabled={phone.length < 12}
          >
            Send Otp
          </button>
          <div id="otpModal" className="fixed inset-0 flex items-center justify-center hidden bg-black bg-opacity-50">
            <div className="bg-black rounded-lg p-6 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl text-white">Verify Otp</h1>
                <button 
                  className="text-white text-2xl" 
                  onClick={() => document.getElementById('otpModal').classList.add('hidden')}
                >
                  <IoClose />
                </button>
              </div>
              <MuiOtpInput length={6} value={otp} onChange={setOtp} style={{ gap: "3px", width: "100%", marginInline: "auto" }} />
              <button 
                type="button" 
                className='bg-blue-600 text-white py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 mt-4' 
                onClick={handleverifyotp}
              >
                Verify Otp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
