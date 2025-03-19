import React from "react";
import "../index.css"; 

const RestaurantCard = ({ name, image, cuisine, price, rating, time }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p className="cuisine">{cuisine}</p>
        <p className="price">{price}</p>

        <div className="bottom-row">
          <span className="rating">{rating} ⭐ Rating</span>
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
