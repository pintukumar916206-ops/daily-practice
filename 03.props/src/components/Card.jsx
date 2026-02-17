import React from "react";

const Card = (props) => {
    console.log(props);
    
return (
    <div className="card">
    <img src={props.img} alt="PROFILE PHOTO" />
    <h1>{props.user}</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        veritatis praesentium! Amet, velit repellat.
    </p>
    <button>VIEW PROFILE </button>
    </div>
);
};

export default Card;
