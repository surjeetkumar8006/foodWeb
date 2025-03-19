import React from "react";

const Card = ({ title, img, price, rating }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="text-muted">{price}</p>
          <span className="badge bg-success">{rating} ⭐</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
