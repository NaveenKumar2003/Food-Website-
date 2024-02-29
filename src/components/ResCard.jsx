const ResCard = (props) => {
  const { restaurant } = props
  return (
    <div className="res-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId} />
      <div>
        <div className="res-name">{restaurant.name}</div>
        <div className="res-info">
          {restaurant.avgRating} | {restaurant.costForTwo}
        </div>
        <div className="cuisines">
          {restaurant.cuisines.join(', ')}
        </div>
        <div className="area">{restaurant.areaName}</div>
      </div>
    </div>
  )
}

export default ResCard