import React from "react";
import './index.css'; 

function Index() {
    return(
        <div class="landingPage">
            <div class="gameHeader">HALO</div>
            <div class="binary">
                    <span style={{'--i':1}}>B</span>
                    <span style={{'--i':2}}>I</span>
                    <span style={{'--i':3}}>N</span>
                    <span style={{'--i':4}}>A</span>
                    <span style={{'--i':5}}>R</span>
                    <span style={{'--i':6}}>Y</span>
            </div>
                <div class="container">
                    <button class="btn-1"><span><a href="./start.html">START GAME</a></span></button>
                    <button class="btn-1"><span>CREDITS</span></button>
                </div>
    </div>
       
    );
}; 

export default Index; 