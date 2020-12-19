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
import Post from './Post/Post';

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
      <Post
        photoUrl='https://media-exp1.licdn.com/dms/image/C4D03AQEAcfgA635OGg/profile-displayphoto-shrink_100_100/0/1594928442682?e=1613606400&v=beta&t=Ra5iovLQ4puVS9gDoRf6qSr0Y45m1vl62--uUxwPtGg'
        name='Binay'
        message='What up?'
        description='Nicee'
      />
    </div>
  );
}

export default Feed;
