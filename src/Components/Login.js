import React, {useState } from 'react';
import { Redirect } from 'react-router';

export default function Login() {
    
    //State for login 
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
    const [token, setToken] = useState(sessionStorage.getItem('token') || '')

    const loginAccount = async () => {
        const endpoint = 'http://localhost:5000/login';
        const data = {
            email: inputEmail,
            password: inputPassword
        };
        const configs = {
            method: 'POST',
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };
        const response = await fetch(endpoint, configs);
        const authInfo = await response.json();
        // console.log(authInfo.token)
        sessionStorage.setItem("token", authInfo.token)
        setToken(authInfo.token)
    }
    
    
    return (
        <div>
            <>
                <div className='titleWrapper'>
                    <p>Login</p>
                </div>
        
                <div className='loginForm'>
                    
                        <input  type='email' 
                                placeholder='Email' 
                                minLength='2' 
                                id='email' 
                                className='signupInput'
                                required
                                onChange={e => setEmail(e.target.value)} />

                        <input  type='password' 
                                placeholder='Password' 
                                minLength='2' 
                                id='password'
                                className='signupInput' 
                                required
                                onChange={e => setPassword(e.target.value)} />

                        <button 
                                id='submit'
                                className='signupSubmit'
                                onClick={e => loginAccount()}>Login</button>

                        {/* <p className='withAccount'>Already have an account? <a className='signInButton'>Sign In</a>  </p> */}
                </div>

                
                {token ? <Redirect to='/home'/> : null}
                
    </>
        </div>
    )
}
