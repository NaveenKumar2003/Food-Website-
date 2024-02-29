
import React from 'react';


const Order = () => {
  return (
    <div className="order" id="Order">
      <h1>
        <span>Order</span>Now
      </h1>

      <div className="order_main">
        <div className="order_image">
          <img src="public/order now.png" alt="Order Now" width="500" height="300" />
        </div>

        <form action="#">
          <div className="input">
            <p>Name</p>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="input">
            <p>Email</p>
            <input type="email" placeholder="Your email" />
          </div>

          <div className="input">
            <p>Number</p>
            <input placeholder="Your number" />
          </div>

          <div className="input">
            <p>How Much</p>
            <input type="number" placeholder="How many orders" />
          </div>

          <div className="input">
            <p>Your Order</p>
            <input placeholder="Food name" />
          </div>

          <div className="input">
            <p>Address</p>
            <input placeholder="Your address" />
          </div>

          <a href="#" className="order_btn">
            Order Now
          </a>
        </form>
      </div>
    </div>
  );
};

export default Order;
