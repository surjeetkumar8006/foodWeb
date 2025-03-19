import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css"; 
import img from "./assets/pizza2.jfif"

const restaurants = [
  {
    name: "Domino's Pizza",
    image: img,
    cuisine: "Pizzas, Italian, Fast Food",
    price: "₹400 for two",
    rating: "4.5",
    time: "30 mins",
  },
  {
    name: "McDonald's",
    image: img,
    cuisine: "Burgers, Fast Food, Beverages",
    price: "₹300 for two",
    rating: "4.2",
    time: "25 mins",
  },
  {
    name: "KFC",
    image: img,
    cuisine: "Chicken, Fast Food, Beverages",
    price: "₹350 for two",
    rating: "4.3",
    time: "20 mins",
  },
  {
    name: "Subway",
    image: img,
    cuisine: "Healthy, Sandwiches, Salads",
    price: "₹250 for two",
    rating: "4.1",
    time: "18 mins",
  },
  {
    name: "Baskin Robbins",
    image: img,
    cuisine: "Desserts, Ice Creams",
    price: "₹200 for two",
    rating: "4.6",
    time: "15 mins",
  },
  {
    name: "Starbucks",
    image: img,
    cuisine: "Coffee, Beverages, Desserts",
    price: "₹500 for two",
    rating: "4.7",
    time: "10 mins",
  },
  {
    name: "Barbeque Nation",
    image: img,
    cuisine: "BBQ, Buffet, North Indian",
    price: "₹800 for two",
    rating: "4.8",
    time: "45 mins",
  },
  {
    name: "Haldiram's",
    image: img,
    cuisine: "North Indian, Street Food, Sweets",
    price: "₹300 for two",
    rating: "4.4",
    time: "20 mins",
  },
  {
    name: "Theobroma",
    image: img,
    cuisine: "Bakery, Cakes, Pastries",
    price: "₹350 for two",
    rating: "4.5",
    time: "15 mins",
  },
  {
    name: "Theobroma",
    image: img,
    cuisine: "Bakery, Cakes, Pastries",
    price: "₹350 for two",
    rating: "4.5",
    time: "15 mins",
  },
  {
    name: "Theobroma",
    image: img,
    cuisine: "Bakery, Cakes, Pastries",
    price: "₹350 for two",
    rating: "4.5",
    time: "15 mins",
  },
  {
    name: "Theobroma",
    image: img,
    cuisine: "Bakery, Cakes, Pastries",
    price: "₹350 for two",
    rating: "4.5",
    time: "15 mins",
  },
  {
    name: "Theobroma",
    image: img,
    cuisine: "Bakery, Cakes, Pastries",
    price: "₹350 for two",
    rating: "4.5",
    time: "15 mins",
  },
  {
    name: "Theobroma",
    image: img,
    cuisine: "Bakery, Cakes, Pastries",
    price: "₹350 for two",
    rating: "4.5",
    time: "15 mins",
  },
  {
    name: "Theobroma",
    image: img,
    cuisine: "Bakery, Cakes, Pastries",
    price: "₹350 for two",
    rating: "4.5",
    time: "15 mins",
  },
];

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 className="title">Restaurants with Online Food Delivery in Noida</h2>
        <hr></hr>
        <div className="restaurant-grid">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
