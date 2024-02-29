import React, { useState } from 'react';
import './menu.css';
import menuItems from './menuitems'; // Adjust the path as needed
import Search from './Search';

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterMenu = (category) => {
    console.log(`Filtering menu by category: ${category}`);
    setCurrentCategory(category);
  };

  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    // You can perform additional actions based on the search term here
    setSearchTerm(searchTerm);
  };

  const filteredItems = menuItems
    .filter((item) => currentCategory === 'all' || item.category === currentCategory)
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="menu" id="Menu">
      <h1>
        <span style={{ color: 'orange' }}>Our</span>
        <span style={{ color: 'yellow' }}>Menu</span>
      </h1>

      <div className="filter-btns">
        <button type="button" className="filter-btn" onClick={() => filterMenu('all')}>
          All
        </button>
        <button type="button" className="filter-btn" onClick={() => filterMenu('South Indian Dish')}>
          South Indian Dish
        </button>
        <button type="button" className="filter-btn" onClick={() => filterMenu('Ice Cream')}>
          Ice Cream
        </button>
        <button type="button" className="filter-btn" onClick={() => filterMenu('Hotel Specials')}>
          Hotel Specials
        </button>
        <button type="button" className="filter-btn" onClick={() => filterMenu('Fast food')}>
          Fast food
        </button>
      </div>

      <Search onSearch={handleSearch} />

      <div className="menu_box">
        {filteredItems.map((item, index) => (
          <div className="menu_card" key={index} data-category={item.category}>
            <div className="menu_image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="small_card">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="menu_info">
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <div className="menu_icon">
                {Array.from({ length: Math.floor(item.rating) }, (_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
                {item.rating % 1 !== 0 && (
                  <i className="fa-solid fa-star-half-stroke"></i>
                )}
              </div>
              <a href="#" className="menu_btn">
                <button>Order Now</button>
                <div>
                <button class ="cd">Add to cart</button></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
