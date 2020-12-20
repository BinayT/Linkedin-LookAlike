import React, { useEffect, useState } from 'react';
import {
  CalendarTodayOutlined,
  CreateOutlined,
  DescriptionOutlined,
  ImageOutlined,
  PlayCircleFilledOutlined,
} from '@material-ui/icons';
import firebase from 'firebase';

import './Feed.scss';
import InputOptions from './InputOptions/InputOptions';
import Post from './Post/Post';
import { db } from '../../firebase';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    console.log(db.collection('posts'));
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'Binay T',
      description: 'This is a test',
      message: input,
      photoUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEAcfgA635OGg/profile-displayphoto-shrink_100_100/0/1594928442682?e=1613606400&v=beta&t=Ra5iovLQ4puVS9gDoRf6qSr0Y45m1vl62--uUxwPtGg',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateOutlined />
          <form>
            <input
              type='text'
              placeholder='Start a post'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post
        photoUrl='https://media-exp1.licdn.com/dms/image/C4D03AQEAcfgA635OGg/profile-displayphoto-shrink_100_100/0/1594928442682?e=1613606400&v=beta&t=Ra5iovLQ4puVS9gDoRf6qSr0Y45m1vl62--uUxwPtGg'
        name='Binay'
        message='What up?'
        description='Nicee'
      /> */}
    </div>
  );
}

export default Feed;
