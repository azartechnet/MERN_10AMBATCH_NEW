import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function About()
{
    const navigate=useNavigate();
    return(
        <div>
            <h1>AboutUs</h1>
            <button onClick={()=>navigate("/")}>Go To HomePage</button>
        </div>
    )
}
export default About;