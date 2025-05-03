import React, {useState, useContext} from 'react'
import { ThemeContext } from '../ThemeProvider'
import { useNavigate } from 'react-router-dom'
import {  BookAppLogo, loginImgG,  DarkColor, LightColor , LigColor, DacColor} from '../List'
import './Login.css'
import { FaEye, FaHome } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

const Login = () => {
    const {isDarkMood} = useContext(ThemeContext)
    const { register, 
            handleSubmit, 
            formState: { errors}, 
        } = useForm({
            resolver: yupResolver(schema)})
    const onSubmit = (data) => {
        console.log('submitted', data)
    }
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
    }
    const handleRegistration = () => {
        navigate('/Registration')
    }

  return (
    <div className='LoginContainer' style={{ color: isDarkMood ? LightColor : DarkColor, background: isDarkMood ? DarkColor: LightColor }}>
        <div className="Login">
            <div className="LoginIMG">
                <div className="Containe">
                <div className="Box1">
                    <img src={BookAppLogo}/>
                </div>
                <div className="Box2">
                <img src={loginImgG}/>
                </div>
                </div>
            </div>

            <div className="LoginToobookapp" style={{  background: isDarkMood ? DarkColor: LightColor}}>
                <div className={` ${'HomeIcon'} ${isDarkMood ? 'btnDark' : 'btnLight'}`} onClick={handleHome}>
                    <FaHome/>
                </div>
                <div className="LoginToobookappContainer">
                <p className='p'>Login to Bookapp</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="username">
                    <label>Username <span>*</span></label>
                    <input type='email' {...register('email')} placeholder='Username'/>
                    <p className='ErrorMessage'>{errors.email?.message}</p>
                    </div>
                    
                    <div className="passsword">
                    <label>Password <span>*</span></label>
                    <input type='password' {...register('password')} placeholder='Enter password'/>
                    <i><FaEye/></i>
                    <p className='ErrorMessage'>{errors.password?.message}</p>
                    
                    </div>
                    <div className="TermsCondition">
                        <label className='CheckboxContainer'>
                            <input type='checkbox'/>
                            <span className='checkmark'></span>
                            I agree with Teeno's &nbsp; < a href='#' className={` ${'PPP'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>Terms & Conditions</a>
                        </label>
                        <label className='CheckboxContainer'>
                            <input type='checkbox'/>
                            <span className='checkmark'></span>
                            I’d like being informed about latest news and tips
                        </label>
                        {/* <p><span><input type='checkbox'/></span> I agree with Teeno's < a href='#'>Terms & Conditions</a></p> */}
                        {/* <p><span><input type='checkbox'/></span> </p> */}
                    </div>
                    <button type='submit' className={` ${'submitBTN'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>Submit</button>
                    <div className="ForgetPass">
                        <a href='#' className={` ${'PPP'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>Forget Password?</a>
                        <p>Don't have an account? < a href='#' onClick={handleRegistration} className={` ${'PPP'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>Click here</a> to signup</p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login