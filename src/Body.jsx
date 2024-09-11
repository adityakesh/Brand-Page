import React from "react";

export default function Body() {
  return (
    <div className="body container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn">
            <button className="btn">Show Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className='shopping'>
            <p>Also Available on</p>
            <div className="icons">
                <img src="/image/amazon.png" alt="amazon"/>
                <img src="/image/flipkart.png" alt="amazon"/>
            </div>
        </div>
      </div>
      <div className="images"> 
        <img src="/image/shoe_image.png" alt="shoe"/>
      </div>
    </div>
  );
}
