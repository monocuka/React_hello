import React from "react";

export const ReplyButton = () => (<i className="fa fa-reply reply-button" />); 

const Count = ({ count }) => {
    if (count > 0) {
        return (
            <span className="retweet-count" >
            {count}
            </span>
        );
    } else {
        return null ;
    }
}

export const RetweetButton = ({ count }) => (
    <span className="retweet-button" >
    <i className="fa fa-retweet" />
    <Count count={count} />
    </span>
);

export const LikeButton = ({ count }) => (
    <span className="like-button" >
        <i className="fa fa-heart" />
        <span className="like-count" >
        {count ? count : null }
        </span>
    </span>
);

export const MoreOptionsButton=() => (
    <i className="fa fa-ellipsis-h more-options-button" />
); 