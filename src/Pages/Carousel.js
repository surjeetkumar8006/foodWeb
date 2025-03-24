import React, { useState } from "react";
import "./../Style/home.css";

const Carousel = ({ images = [] }) => {  
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 5;

  const prevSlide = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () => setStartIndex((prev) => Math.min(prev + 1, images.length - visibleItems));

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Top restaurant chains in Noida</h2>

      {images.length === 0 ? (
        <p className="carousel-empty">No restaurants available</p>
      ) : (
        <>
          <div className="carousel-navigation">
            <button className="prev-btn" onClick={prevSlide} disabled={startIndex === 0}>
              &#10094;
            </button>
            <button className="next-btn" onClick={nextSlide} disabled={startIndex >= images.length - visibleItems}>
              &#10095;
            </button>
          </div>

          {images.slice(startIndex, startIndex + visibleItems).map((item, index) => (
  <div key={index} className="carousel-item">
    <img src={`images/${item.cloudinaryImageId || item.image}.avif`} alt={item.name || "Unnamed Restaurant"} />
    <p>{item.name || "Unnamed Restaurant"}</p>
  </div>
))}


        </>
      )}

    </div>
  );
};
export default Carousel;