import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import './Sidebar.scss';
import { selectUser } from '../../features/userSlice';

function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user);

  const recentItems = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='code.png' alt='' />
        <Avatar
          className='sidebar__avatar'
          src={user.photoURL ? user.photoURL : 'photo.png'}
        />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>

        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>

      <div className='sidebar__buttom'>
        <p>Recent</p>
        {recentItems('reactjs')}
        {recentItems('flexbox')}
        {recentItems('firebase')}
        {recentItems('scss')}
        {recentItems('fullstack')}
      </div>
    </div>
  );
}

export default Sidebar;
