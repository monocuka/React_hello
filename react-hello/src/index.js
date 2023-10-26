import React from "react";
import ReactDOM from "react-dom";
import {Hello, World} from "./Hello.js"


function HelloWorld() {
    return(
        <div>
            <Hello /> <World />
        </div>
    )
}

ReactDOM.render(

    <HelloWorld/>,
    document.querySelector('#root')
)