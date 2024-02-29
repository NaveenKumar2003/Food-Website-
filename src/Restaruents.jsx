import { useEffect, useState } from "react"


const Restaurants = () => {
  const [apiData, setApiData] = useState([])
  const [restaurantsList, setRestaurantsList] = useState([])
  const [searchText, setSearchText] = useState("")
  // useEffect(() => {
  //   fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json)
  //       const res = json.data.cards.find(item => item.card.card.id === "restaurant_grid_listing")
  //       const restaurantsArr = res.card.card.gridElements.infoWithStyle.restaurants
  //       const restaurants = restaurantsArr.map(item => item.info)
  //       setRestaurantsList(restaurants)
  //       setApiData(restaurants)
  //       console.log(restaurants[0])
  //     })
  // }, [])

  .fetch('https://swiggy-255.onrender.com /get-restaurant-details')
  .then(function (resObj){
    resObj.json()
    .then(function(restaurants){
      console.log(restaurants)
      setRestaurantsList(restaurants)
      setApiData(restaurant)

    })
  })
  const filterTopRestaurants = () => {
    const res = apiData.filter((r) => r.avgRating > 4.5)
    setRestaurantsList(res)
  }
  const sortRestaurants = () => {
    const res = apiData.sort((a, b) => b.avgRating - a.avgRating)
    setRestaurantsList([...res])
  }

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }

  const searchRestaurants = () => {
    const res = apiData.filter((r) => r.name.toLowerCase().includes(searchText.toLowerCase()))
    setRestaurantsList(res)
  }

  if (apiData.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="page-title">Restaurants</div>
      <div>
        <button onClick={filterTopRestaurants}>Top restaurants</button>
        <button onClick={sortRestaurants}>Sort restaurants</button>
        <input value={searchText} onChange={handleInputChange} />
        <button onClick={searchRestaurants}>Search</button>
      </div>
      {restaurantsList.length === 0 ? (
        <div>No restaurants found</div>
      ) : (
        <div className="res-container">
          {restaurantsList.map((res) => {
            return <ResCard key={res.id} restaurant={res} />
          })}
        </div>
      )}
    </>
  )
}

export default Restaurants