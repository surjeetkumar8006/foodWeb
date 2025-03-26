import { useState, useEffect } from "react";
import "./../Style/search.css";
import Resturant from "./../Util/Restaurant.json";
import SearcheData from "../Components/SearcheData";
import Card from "../Components/Card"; 

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const defaultRestaurants = Resturant.slice(0, 8);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsInputEmpty(inputValue === "");
      if (inputValue !== "") {
        const filterd = Resturant.filter((res) =>
          res?.info?.name
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        );
        setFilteredRestaurants(filterd);
      } else {
        setFilteredRestaurants([]);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="searchField"
          placeholder="Search Restaurants and Food"
        />
      </div>

      {!isInputEmpty && filteredRestaurants.length === 0 ? (
        <div className="searchNotFound">
          <p>This restaurant is not listed</p>
          <p>Please enter some Other Restaurant Name</p>
        </div>
      ) : (
        <>
          {!isInputEmpty ? (
            <div className="searched">
              {filteredRestaurants.map((res) => (
                <SearcheData key={res.info.id} res={res} />
              ))}
            </div>
          ) : (
            
            <div className="defaultList">
              <h2>Popular Restaurants</h2>
              <div className="cardContainer">
                {defaultRestaurants.map((item) => (
                  <Card key={item.info.id} data={item} />
                ))}
              </div>
            </div>
)}
        </>
      )}
    </div>
  );
};

export default Search;
