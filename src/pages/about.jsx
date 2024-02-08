import "./about.css";
import { useState } from "react";

function About(){
    const [count, setCount] = useState(0);
    const [hobbies, setHobbies] = useState(["fishing", "motorcycle travel", "watch TV"]);
    const [projects, setProjects] = useState(["pet salon", "task manager", "online store"]);

    function handleButton(){
        console.log("Button Clicked!");
        setCount(count + 1);
    }
return (
    
    <div className="about">
        <h1>Contact Us</h1>
            <label>Clicked: {count}</label> <br />
            <button onClick={handleButton}>Test</button>
            <hr />
            {hobbies.map((hb, index) => (<button key={index} className= "btn btn-sm btn-primary mx-3">{hb}</button> ))}

        <hr />
            {projects.map( pr => <h3>{pr}</h3>)}
    </div>
);
}

export default About;
