import "./../Style/RestaurantInfo.css";
import { useParams } from "react-router-dom";
import Re from "../Util/Restaurant.json";
import Reb from "../Util/Menu.json";
import RestaurantInfo from "../Components/RestaurantInfo";

const Restaurant = () => {
  const { resId } = useParams();
  console.log("Restaurant ID:", resId);

  // 1) Find restaurant data by resId
  const restaurantData = Re.find((item) => item.info.id === resId);
  if (!restaurantData) {
    return <p>Restaurant not found.</p>;
  }

  // 2) Extract info from restaurantData
  const { name, rating, totalRatingsString, costForTwo, cuisines, locality, availability } =
    restaurantData.info;

  const isClosed = availability && availability.nextOpenMessage ? true : false;
  const nextOpenTime = availability?.nextOpenMessage || "11:00 AM tomorrow";

  // 3) In your Menu.json, find the object whose title is "Recommended"
  //    (You can similarly find "Family Combo", "Kids Combo", etc. if needed)
  const recommendedObj = Reb.find(
    (outerObj) => outerObj.card.card.title === "Recommended"
  );

  // 4) Extract the itemCards array (if found), each itemCard has "card"->"info"
  let recommendedItems = [];
  if (recommendedObj) {
    recommendedItems = recommendedObj.card.card.itemCards.map(
      (ic) => ic.card.info
    );
  }

  return (
    <div className="restPage">
      {/* Breadcrumb */}
      <div className="path">
        <span>Home / Noida / {name}</span>
      </div>

      <div className="restContainerfood">
        {/* Left Section: Restaurant Info */}
        <div className="restInfo">
          <p className="restName">{name}</p>
          <div className="restaurantService">
            <p>Order Online</p>
            <p>Dineout</p>
          </div>

          <RestaurantInfo
            rating={rating}
            totalRatingsString={totalRatingsString}
            costForTwo={costForTwo}
            cuisines={cuisines}
            locality={locality}
            isClosed={isClosed}
            nextOpenTime={nextOpenTime}
          />
        </div>

        {/* Right or Below Section: "Recommended" Menu Items */}
        <div className="restcuisineCont">
          <div className="recommendedSection">
            <h2>Recommended ({recommendedItems.length})</h2>
            <div className="menuList">
              {recommendedItems.map((menuItem) => (
                <div key={menuItem.id} className="menuItem">
                  <div className="menuItem-left">
                    <h3 className="menuItem-name">{menuItem.name}</h3>
                    {/* defaultPrice is in paise, converting to ₹ */}
                    {menuItem.defaultPrice && (
                      <p className="menuItem-price">
                        ₹{(menuItem.defaultPrice / 100).toFixed(2)}
                      </p>
                    )}
                    <p className="menuItem-desc">{menuItem.description}</p>
                  </div>
                  <div className="menuItem-right">
                    <button className="addBtn">Add</button>
                    <img
                      src={
                        menuItem.imgName
                          ? `/images/${menuItem.imgName}`
                          : "/images/default.jpg"
                      }
                      alt={menuItem.name}
                      className="menuImg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
