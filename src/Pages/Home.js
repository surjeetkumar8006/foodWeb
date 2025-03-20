import { useEffect, useState } from "react";
import "./../Style/home.css";
import Card from "../Components/Card";
import Carousel from "../Pages/Carousel"; 

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  let Fetchdata = async () => {
    try {
      let response = await fetch("http://localhost:3000/reasturent.json");
      let datas = await response.json();
      setData(datas);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <div className="homePageContainer">
      {/* Carousel for Top Restaurants */}
      <Carousel />

      <h2>Restaurants with online food delivery in Noida</h2>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="cardContainer">
          {data.map((data, i) => {
            return <Card key={i} data={data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
