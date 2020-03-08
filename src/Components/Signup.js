import React, { useState }  from 'react';
import { Redirect } from 'react-router';


export default function Signup() {
    
    //State mgmt for creating a new account
    const [inputFirstName, setFirstName] = useState('');
    const [inputLastName, setLastName] = useState('');
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');

    //State mgmt to switch between creating account and signing in
    const [registeration, setRegisteration] = useState(false);
    



    //Create an account route//
    const createAccount = async () => {
        const endpoint = 'http://localhost:5000/create_account';
        const data = {
            email: inputEmail,
            first_name: inputFirstName,
            last_name: inputLastName,
            password_hash: inputPassword
        };
        const configs = {
            method: 'POST',
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };
        const response = await fetch(endpoint, configs);
        const accountCreation = await response.json()
        
        if (accountCreation === 'successfully created account') {
            setRegisteration(!registeration);
        }
        console.log(accountCreation);
    }
    
    
    
    return (
        <>
            <div className='titleWrapper'>
                <p>Create Your Armario Account</p>
            </div>
        
            <div>
                <form className='signupForm'>
                    <input  type='text' 
                            placeholder='First Name' 
                            autoFocus
                            required 
                            minLength='2' 
                            id='first_name' 
                            className='signupInput'
                            onChange={e => setFirstName(e.target.value)} />
                    
                    <input  type='text' 
                            placeholder='Last Name' 
                            minLength='2' 
                            id='last_name'
                            className='signupInput' 
                            required
                            onChange={e => setLastName(e.target.value)} />
                    
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

                    {/* <input  type='password' 
                            placeholder='Confirm' 
                            minLength='2' 
                            id='passwordConfirm'
                            className='signupInput' 
                            required /> */}
                    
                    <input  type='submit' 
                            id='submit'
                            className='signupSubmit'
                            onClick={e => createAccount()}/>
                    {registeration ? <Redirect to='/login' />: null}
                    <p className='withAccount'>Already have an account? <a className='signInButton'>Sign In</a>  </p>
                     
                </form>

                
            </div>
    </>
    )
}
