import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="main">
      <div className="men_text">
        <h1>
          It's not just <span>Food</span>
          <br />It's an <span>Experience</span>
        </h1>
        <h3 style={{ color: 'red', fontSize: 20}}>
          "Flavors that Unite, Served with Delight!" </h3>
          <button className="orange-button">Order now</button>
      </div>
      
      <div className="main_image">
        <img src="public/main_img.png" alt="Main Image" />
       
      </div>
      
    </div>
    
  );
};

export default Home;

