import React from "react";
import './index.css'; 
import Binary from './Binary';

function Index() {
    return(
        <div>
            <span class="gameHeader">HALO</span>
            <Binary />
            <span class="container">
                <button class="btn-1"><span><a href="./start.html">START GAME</a></span></button>
                <button class="btn-1"><span>CREDITS</span></button>
            </span>
    </div>
       
    );
}; 

export default Index; 