import React from 'react';
import './about.css';
const About = () => {
  return (
    <div className="about" id="About">
      <div className="about_main">
        <div className="image">
          <img src="public/about-img.png" alt="About Us" />
        </div>

        <div className="about_text">
  <h1><span><u>About Us</u></span></h1>
  <h3>Why Choose us?</h3>
  <p style={{ color: 'rgb(0, 0, 0)' }}>
    Welcome to Our Foody Website, we're not just about meals;
    we're crafting an experience. Our culinary artisans blend
    passion and innovation to create dishes that tantalize taste
    buds. From farm-fresh ingredients to globally-inspired recipes,
    we redefine gastronomy for the adventurous palate. Join us on a
    flavorful journey where every click brings you closer to a
    symphony of tastes that redefine your dining experience.
  </p>

  <div className="about_btn">
    <button class="orn"style={{ backgroundColor: 'orange' }}>Order Now</button>
  </div>
</div>


        
      </div>
    </div>
  );
}

export default About;
