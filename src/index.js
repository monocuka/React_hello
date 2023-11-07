import React from "react";
import { createRoot } from 'react-dom/client';
import { Tweet } from "./tweet/Tweet.js";

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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Tweet tweet={testTweet}/>);