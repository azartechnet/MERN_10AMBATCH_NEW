import React from "react";
import { useNavigate } from "react-router-dom";
function Home()
{
    const navigate=useNavigate();
    const goToAbout=()=>{
        navigate("/about")
    }
    const goToContact=()=>{
        navigate("/contact")
    }
    return(
        <div>
            <h1>Welcome</h1>
            <button onClick={goToAbout}>goToAbout</button>
            <button onClick={goToContact}>goToContact</button>
        </div>
    )
}
export default Home;