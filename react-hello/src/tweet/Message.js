import React from "react";

export const Message = () => {
    return [
        <div className="message">
            This is less than 140 characters.
        </div>
    ]
}

export const Time = () => (<span className="time" > 3h ago </span>);