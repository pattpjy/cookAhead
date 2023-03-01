import React from "react";
const Card = ({ cardTitle, cardImg, id }) => {
  return (
    <div>
      <h3>{cardTitle}</h3>
      <img src={cardImg} alt=""></img>
    </div>
  );
};
export default Card;
