import React from 'react';
import { Link } from 'react-router-dom';

//components;

import MiniFooter from '../../components/miniFooter';




const Welcome = () => {
    return (
        <div className='welcome-wrapper'>
            <div className='welcome-text-wrapper'>
                <h1>Welcome to test-api!</h1>
                <p>Please login or register</p>
            </div>
            <div className='button-wrapper'>
                <Link className='main-button' to={'/login'}>Login</Link>
                <Link style={{marginTop:'20px'}} className='main-button' to={'/register'}>Register</Link>
            </div>
            <MiniFooter />
        </div>
    )
}

export default Welcome;
