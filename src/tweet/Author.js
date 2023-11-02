import React from "react";

export const Author = ({author}) => {
    const {name, handle} = author;
    return [
        <span className="author">
            <span className="name" >{name} </span>
            <span className="handle"> @{handle}  </span>
        </span>
    ]
}