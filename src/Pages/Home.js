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
      
      // ✅ Ensuring all images have .avif format
      let formattedData = datas.map((item) => ({
        ...item,
        image: item.image ? `${item.image}.avif` : "default-image.avif", 
        name: item.name || "Unnamed Restaurant",
      }));

      setData(formattedData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Fetchdata();
  }, []);
  
  console.log("API से आया Data:", data); 

  return (
    <div className="homePageContainer">
      {/* ✅ Sending Data to Carousel */}
      {loading ? <p>Loading...</p> : <Carousel images={data} />}  

      <h2>Restaurants with online food delivery in Noida</h2>
      
      {/* ✅ Sending Data to Card */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cardContainer">
          {data.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
