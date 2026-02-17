// import React from "react";
import { Bookmark } from "lucide-react";


const Card = (props) => {

    console.log(props.company);
    
return (
    <div className="card">
    <div>
        <div className="top">
        <img src={props.brandLogo} alt="LOGO" />
            
        <button>
            SAVE <Bookmark size={35} />
        </button>
        </div>

        <div className="center">
          <h3>
            {props.company} <span>{props.datePosted}</span>{" "}
          </h3>
          <h2>Leader of JUSTICE LEAGUE </h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${props.pay}/hrs</h3>
          <p>Patna, India</p>
        </div>
        <button>Apply Now </button>
      </div>
    </div>
);
};

export default Card;
