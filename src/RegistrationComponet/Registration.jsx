import React, {useState, useContext} from 'react'
import { ThemeContext } from '../ThemeProvider'
import { useNavigate } from 'react-router-dom'
import './Registration.css'
import {  BookAppLogo, loginImgGG,  DarkColor, LightColor , LigColor, DacColor} from '../List'
import { FaEye, FaHome } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(15, 'Password must be at least 15 characters').required('Password is required'),
    ConfirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password')], 'Password must match')
})

const Registration = () => {
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
        const handleLogin = () => {
            navigate('/Login')
        }
  return (
    <div className='RegistrationContainer' style={{ color: isDarkMood ? LightColor : DarkColor, background: isDarkMood ? DarkColor: LightColor }}>
            <div className="Registration">
                <div className="RegistrationIMG">
                    <div className="Containerr">
                    <div className="Box1">
                        <img src={BookAppLogo}/>
                    </div>
                    <div className="Box2">
                    <img src={loginImgGG}/>
                    </div>
                    </div>
                </div>
    
                <div className="RegistrationToobookapp" style={{  background: isDarkMood ? DarkColor: LightColor}}>
                    <div onClick={handleHome} className={` ${'HomeIcon'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>
                        <i><FaHome/></i>
                    </div>
                    <div className="RegistrationToobookappContainer">
                    <p className='p'>Signup to Bookapp</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="username">
                        <label>Username <span>*</span></label>
                        <inpu style={{color: isDarkMood ? 'white' : 'black'}}t type='text' {...register('username')} placeholder='Username'/>
                        <p className='ErrorMessa'>{errors.username?.message}</p>
                        </div>
                        
                        <div className="username">
                        <label>Email <span>*</span></label>
                        <input style={{color: isDarkMood ? 'white' : 'black'}} type='email' {...register('email')} placeholder='Example@gmail.com'/>
                        <p className='ErrorMessa'>{errors.email?.message}</p>
                        </div>

                        <div className="passsword">
                        <label>Password <span>*</span></label>
                        <input style={{color: isDarkMood ? 'white' : 'black'}} type='password' {...register('password')} placeholder='Enter password...'/>
                        <i><FaEye/></i>
                        <p className='ErrorMessa'>{errors.password?.message}</p>
                        
                        </div>

                        <div className="passsword">
                        <label>Confirm Password <span>*</span></label>
                        <input style={{color: isDarkMood ? 'white' : 'black'}} type='password' {...register('ConfirmPassword')} placeholder='Confirm password...'/>
                        <i><FaEye/></i>
                        <p className='ErrorMessa'>{errors.ConfirmPassword?.message}</p>
                        
                        </div>
                        <div className="TermsCondition">
                            <label className='CheckboxContainer'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>
                                <p className={` ${'PPP'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>I agree with Teeno's &nbsp; < a href='#' className={` ${isDarkMood ? 'btnDark' : 'btnLight'}`}>Terms & Conditions</a></p>
                            </label>
                            {/* <p><span><input type='checkbox'/></span> I agree with Teeno's < a href='#'>Terms & Conditions</a></p> */}
                            {/* <p><span><input type='checkbox'/></span> </p> */}
                        </div>
                        <button type='submit' className={` ${'submitBTN'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>Submit</button>
                        <div className="ForgetPass">
                            <p>Already a member? < a href='#' onClick={handleLogin} className={` ${'PPP'} ${isDarkMood ? 'btnDark' : 'btnLight'}`}>Login Now</a></p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Registration