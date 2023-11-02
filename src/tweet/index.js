import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import Avatar from './Avatar';
import { Message, Time } from './Message';
import { Author } from './Author';
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
                <RetweetButton />
                <LikeButton />
                <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

const testTweet = {
    message: "Something about cats.",
    gravatar:"763dcd4dad38689d57aa9d83a60bfaa5.jpg",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 20,
    timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));