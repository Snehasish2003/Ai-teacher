import React, { useState } from 'react';
import './forget.css'; 
import login_img from "../../assets/login_img.png";
import { CircleArrowLeft } from 'lucide-react';
import {useNavigate} from "react-router-dom";


const ForgetPasswordForm = () => {
  const navigate=useNavigate();
  const [signUpError, setSignUpError] = useState('');
  const handleLoginClick=()=>{
    navigate("/")
  }
  const [formInput, setFormInput] = useState({
    password: '',
    confirmPassword: '',
  });
  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  const handelforget =async(event)=>{
    event.preventDefault();
    let responseData;
    await fetch("http://localhost:4000/auth/forgotpass", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput)
    }).then((res) => res.json()).then((data) => { responseData = data });

    if (responseData.success) {
      window.location.replace("/");
    } else {
      console.log(responseData);
      setSignUpError(responseData.error);
    }

  }
  return (
    <div className='body border-box'>
    <div className="container-l" id="main">
            <div className="overlay-leftt">
              <img src={login_img} alt="" srcset="" />
            </div>
      <div className="forgeet-password">
        <form onSubmit={handelforget} >
      <CircleArrowLeft className='absolute left-4 top-5 cursor-pointer' onClick={handleLoginClick}/>

        <input
              type="password"
              name="password"
              placeholder="Password"
              value={formInput.password}
              onChange={(e) => handleUserInput('password', e.target.value)}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              value={formInput.confirmPassword}
              onChange={(e) => handleUserInput('confirmPassword', e.target.value)}
              required
            />
            {signUpError && <p className="error-message">{signUpError}</p>}
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ForgetPasswordForm;
