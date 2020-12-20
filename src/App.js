import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className='app'>
      {user ? (
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
