import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <p>What type of rock is this?</p>
          <img src={props.front} />
        </div>
        <div className="flip-card-back">
          <p>{props.back}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
