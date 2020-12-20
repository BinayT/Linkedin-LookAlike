import React from 'react';
import { Avatar } from '@material-ui/core';
import {
  ShareOutlined,
  TextsmsOutlined,
  ThumbUpOutlined,
  SendOutlined,
} from '@material-ui/icons';

import './Post.scss';
import InputOptions from '../InputOptions/InputOptions';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl} />
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
        <InputOptions title='Like' color='gray' Icon={ThumbUpOutlined} />
        <InputOptions title='Comment' color='gray' Icon={TextsmsOutlined} />
        <InputOptions title='Share' color='gray' Icon={ShareOutlined} />
        <InputOptions title='Send' color='gray' Icon={SendOutlined} />
      </div>
    </div>
  );
}

export default Post;
