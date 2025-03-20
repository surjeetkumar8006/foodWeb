const Card = ({ data }) => {
    return (
      <div className="card">
        <img src={`images/${data?.info.cloudinaryImageId}.avif`} />
        <div className="car__Data">
          <h3 className="cardResName">{data?.info.name}</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  