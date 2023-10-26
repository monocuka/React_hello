import React from 'react';
import './index.css';
import Avatar from './Avatar';
import { Message, Time } from './Message';
import { Author } from './Author';
import { ReplyButton, RetweetButton, MoreOptionsButton, LikeButton } from './buttons.js';

export const Tweet = () => {
    return (
        <div className='tweet'>
            <Avatar />
            <div className='content'>
                <Author />  <Time />
                <Message />  
            <div className='buttons'>
                <ReplyButton />
                <RetweetButton />
                <LikeButton />
                <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

