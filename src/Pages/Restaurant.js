import "./../Style/RestaurantInfo.css";
import { useParams } from "react-router-dom";
import Re from "../Util/Restaurant.json";
import Reb from "../Util/Menu.json";
import RestaurantInfo from "../Components/RestaurantInfo";

const Restaurant = () => {
  const { resId } = useParams();
  console.log("Restaurant ID:", resId);

  const restaurantData = Re.find((item) => item.info.id === resId);
  if (!restaurantData) {
    return <p>Restaurant not found.</p>;
  }

  const {
    name,
    rating,
    totalRatingsString,
    costForTwo,
    cuisines,
    locality,
    availability,
  } = restaurantData.info;

  const isClosed = availability && availability.nextOpenMessage ? true : false;
  const nextOpenTime = availability?.nextOpenMessage || "11:00 AM tomorrow";

  const recommendedObj = Reb.find(
    (outerObj) => outerObj.card.card.title === "Recommended"
  );

  let recommendedItems = [];
  if (recommendedObj) {
    recommendedItems = recommendedObj.card.card.itemCards.map(
      (ic) => ic.card.info
    );
  }

  return (
    <div className="restPage">
      <div className="path">
        <span>Home / Noida / {name}</span>
      </div>

      <div className="restContainerfood">
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

        <div className="restcuisineCont">
          <div className="recommendedSection">
            <h2>Recommended ({recommendedItems.length})</h2>
            <div className="menuList">
              {recommendedItems.map((menuItem) => (
                <div key={menuItem.id} className="menuItem">
                  <div className="menuItem-left">
                    <h3 className="menuItem-name">{menuItem.name}</h3>
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
