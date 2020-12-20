import React, { useEffect, useState } from 'react';
import {
  CalendarTodayOutlined,
  CreateOutlined,
  DescriptionOutlined,
  ImageOutlined,
  PlayCircleFilledOutlined,
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

import './Feed.scss';
import InputOptions from './InputOptions/InputOptions';
import Post from './Post/Post';
import { db } from '../../firebase';
import { selectUser } from '../../features/userSlice';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

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
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL,
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL ? photoURL : 'photo.png'}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
