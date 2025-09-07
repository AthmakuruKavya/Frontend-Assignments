import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, updateName] = useState();
    const [password, changePassword] = useState();
    const navigate = useNavigate()

    const nameHandler = (e)=>{
        updateName(e.target.value)
        
    }
    const displayName = () =>{
        if(name === 'kavya' && password === 'kavya'){
            navigate('/dashboard');
        }else{
            console.log('not working');    
        }
    }
  return (
    <>
        <h1>Login</h1>
        <div className='login-form'>
            <label>User Name</label>
            <input type='text' placeholder='Enter name'  onChange={nameHandler}/>
            <label>Password</label>
            <input type="password" name="" id="" placeholder='Enter password' onChange={e => changePassword(e.target.value)}/>
            <button onClick={displayName}>Login</button>
        </div>
    </>
  )
}

export default Login