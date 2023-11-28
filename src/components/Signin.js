import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <main className='main-login'  >
    <div className='login-container'>
    <div className="login">
      <h1>ثبت نام</h1>
      <label className='label'> ایمیل </label>
      <input type="email"></input>
    </div>
    <div className="login">
      
      <label className='label'>نام کاربری</label>
      <input type="text"></input>
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
      <p>قبلا ثبت نام کرده اید؟</p>  <Link to='/cart/login'> ورود</Link>
    </div>
  </div>
  </main>
  )
}
