import React from "react";
import "./Frame.css";

function Frame({frame}) {
    return ( 
        <div className="frame">
            <div className="frameTitle">{frame.title}</div>
            <div className="frameImage">{frame.image}</div>
            <div className="frameDescription">{frame.description}</div>
        </div>
    );
}

export default Frame;