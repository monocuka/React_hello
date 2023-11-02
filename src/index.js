import React from "react";
import ReactDOM from "react-dom";
import {Hello, World} from "./Hello.js"
import { Tweet } from "./tweet/index.js";


function HelloWorld() {
    return(
        <div>
            <Hello /> <World />
            <Tweet />
        </div>
    )
}

ReactDOM.render(

    <HelloWorld/>,
    document.querySelector('#root')
    
)