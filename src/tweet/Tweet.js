import React from 'react';
import './index.css';
import Avatar from './Avatar.js';
import { Message, Time } from './Message.js';
import { Author } from './Author.js';
import { ReplyButton, RetweetButton, MoreOptionsButton, LikeButton } from './buttons.js';

export const Tweet = ({ tweet }) => {
    return (
        <div className='tweet'>
            <Avatar hash={tweet.gravatar} />
            <div className='content'>
                <Author author={tweet.author} /> 
                <Time time={tweet.timestamp} />
                <Message text={tweet.message} />  
            <div className='buttons'>
                <ReplyButton />
                <RetweetButton count={tweet.retweets}  />
                <LikeButton count={tweet.likes} />
                <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}



