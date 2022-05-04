import React, {useState, } from 'react'
import { auth } from './firebase' 
import {useHistory} from 'react-router-dom'
import './LoginPage.css'
import LoginLogo from '../../assets/images/loginlogo.png'


function LogInPage() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
        history.push('/')
      
    })
    .catch(error=>alert(error.message))
  }

  const register = e => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth)
      alert("Your Account has been created")
    })
    .catch(error=>alert(error.message))
  }

  return (
    <div className='logInPage'>
      <div className='loginImg'>
        <img src={LoginLogo}></img>
      </div>
      <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type='password'value={password} onChange={e=>setPassword(e.target.value)}/>
        <div className='button'>
        <button className='Login_button' type='submit'  onClick={signIn}><h2>Login</h2></button></div>
        <button className='register_button' onClick={register}><h2>Create your Account</h2></button>
      </form>
    </div>
  )
}

export default LogInPage