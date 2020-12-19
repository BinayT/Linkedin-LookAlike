import React from 'react';
import {
  CalendarTodayOutlined,
  CreateOutlined,
  DescriptionOutlined,
  ImageOutlined,
  PlayCircleFilledOutlined,
} from '@material-ui/icons';

import './Feed.scss';
import InputOptions from './InputOptions/InputOptions';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateOutlined />
          <form>
            <input type='text' placeholder='Start a post' />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOptions title='Photo' color='#70b5f9' Icon={ImageOutlined} />
          <InputOptions
            title='Video'
            color='#e7e33e'
            Icon={PlayCircleFilledOutlined}
          />
          <InputOptions
            title='Event'
            color='#a0b4b7'
            Icon={CalendarTodayOutlined}
          />
          <InputOptions
            title='Write Article'
            color='#f5987e'
            Icon={DescriptionOutlined}
          />
        </div>
      </div>
      ok
    </div>
  );
}

export default Feed;
