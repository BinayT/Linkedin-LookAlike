import React from 'react';
import { Avatar } from '@material-ui/core';

import './Sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='code.png' alt='' />
        <Avatar
          className='sidebar__avatar'
          src='https://media-exp1.licdn.com/dms/image/C4D03AQEAcfgA635OGg/profile-displayphoto-shrink_100_100/0/1594928442682?e=1613606400&v=beta&t=Ra5iovLQ4puVS9gDoRf6qSr0Y45m1vl62--uUxwPtGg'
        />
        <h2>Binay Timilsina</h2>
        <h4>binay1995@gmail.com</h4>
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
      </div>
    </div>
  );
}

export default Sidebar;
