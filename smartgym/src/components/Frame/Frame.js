import React from "react";
import "./Frame.css";

function Frame({frame}) {
    return ( 
        <div className="frame">
            <div className="frameImage">{frame.image}</div>
            <div>
                <div className="frameTitle">{frame.title}</div>
                <div className="frameDescription">{frame.description}</div>
                <button className="frameButton">{frame.button}Adicionar</button>
            </div>
        </div>
    );
}

export default Frame;