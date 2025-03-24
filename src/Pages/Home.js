import { useEffect, useState } from "react";
import "./../Style/home.css";
import Card from "../Components/Card";
import Carousel from "../Pages/Carousel";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {  
    try {  
      const response = await fetch("http://localhost:3000/reasturent.json");
      const datas = await response.json();
      setData(datas);
      setLoading(false);
    } catch (err) {  
      console.error("Error fetching data:", err);
      setLoading(false);
    }  
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homePageContainer">
      {loading ? <p>Loading...</p> : <Carousel images={data} />}
      <h2>Restaurants with online food delivery in Noida</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cardContainer">
          {data.map((item) => (
            <Card key={item.info.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
