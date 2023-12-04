import React from "react";

export const Author = ({author}) => {
    const {name, handle} = author;
    return [
        <span key="author" className="author">
            <span key="name" className="name" >{name} </span>
            <span key="handle" className="handle"> @{handle}  </span>
        </span>
    ]
}