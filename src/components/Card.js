import React from "react";
import News from "../assets/bg.jpg";

const Card = () => {
  return (
    <div>
      <div class="card mt-3 me-2 col-xs-1" style={{ width: "18rem" }}>
        <img src={News} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
