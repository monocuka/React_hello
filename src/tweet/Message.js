import React from "react";
import moment from 'moment';

export const Message = ({text}) => {
    return [
        <div className="message">
            {text}
        </div>
    ]
}

export const Time = ({time}) => {
    const timeString= moment(time).fromNow();
    return(
        (<span className="time" >
            {timeString} 
        </span>)
    )
} 