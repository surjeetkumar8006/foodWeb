const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={`images/${data?.info.cloudinaryImageId}.avif`} />
      <div className="car__Data">
        <h3 className="cardResName">{data?.info.name}</h3>
        <div className="cardResCuisines">{data?.info.cuisines.join(", ")}</div>
        <div className="cuisinePrice">{data?.info.costForTwo}</div>
        <div className="cardResInfo">
          <span className="cardResRating">{data?.info.avgRating}</span>
          <span className="">3.2 min</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
