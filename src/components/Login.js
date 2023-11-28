import React from "react";
import './login.css'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className='main-login'  >
      <div className='login-container'>
      <div className="login">
        <h1>ورود</h1>
        <label className='label'> ایمیل </label>
        <input type="email"></input>
      </div>
      <div className="login-email">
        <label className='label'> پسورد </label>
        <input type="password"></input>
      </div>
      <div className="login-btn">
        <button>ورود</button>
        <button className='back'>برگشت</button>
      </div>
      <div className="login-signin">
        <p>هنوز ثبت نام نکرده اید؟</p>  <Link to='/cart/register'>ثبت نام</Link>
      </div>
    </div>
    </main>
  );
}
