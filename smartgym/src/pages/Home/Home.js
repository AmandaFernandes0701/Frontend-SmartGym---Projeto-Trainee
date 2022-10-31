import React from "react";
import {useHistory, UseHistory} from "react-router-dom";


function Home(){
    const history = useHistory();
    return(
        <div>

        <h1>Home</h1>
        <button
            onClick={()=>
                {history.push("login");
            }}
            >
                Logout
        </button>
        </div>
    ); 
}
export default Home;