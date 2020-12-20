import React from 'react';

import './Login.scss';

function Login() {
  const register = () => {};

  return (
    <div className='login'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png'
        alt='LinkedIn Logo'
      />
      <form>
        <input placeholder='Full Name (required if registering)' type='text' />
        <input placeholder='Profile Pic URL (optional)' type='text' />
        <input placeholder='Email' type='text' />
        <input placeholder='Password' type='password' />
        <button type='submit'>Sign In</button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
