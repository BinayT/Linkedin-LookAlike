import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../../firebase';
import { login } from '../../features/userSlice';
import './Login.scss';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profileURL, setProfileURL] = useState('');

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.uid,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  const register = () => {
    if (!name) {
      return alert('Please enter a full name');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profileURL,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profileURL,
              })
            );
          });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png'
        alt='LinkedIn Logo'
      />
      <form onSubmit={loginToApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name (required if registering)'
          type='text'
        />
        <input
          value={profileURL}
          onChange={(e) => setProfileURL(e.target.value)}
          placeholder='Profile Pic URL (optional)'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='text'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Click here to{' '}
        <span className='login__register' onClick={register}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
