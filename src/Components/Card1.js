const Card1 = ({ data }) => {
  if (!data || !data.info) {
    return <p>No Data Available</p>;
  }

  return (
    <div className="carousel-item">
      <img 
        src={`images/${data.info.cloudinaryImageId}.avif`} 
        alt={data.info.name || "Unnamed Restaurant"} 
      />
      <p>{data.info.name || "Unnamed Restaurant"}</p>
    </div>
  );
};

export default Card1;