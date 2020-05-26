import React from "react";
import "./Buttonforcart.css";

const Buttonforcart = () => {
  // const formStyle={
  //     height: '120px',
  //     width: '50px'
  // }
  return (
    <div className="flex-container">
      <input type="button" className="button" value="Add To Cart" />
      <input type="button" value="-" />
      <input className="noOfItems" />
      <input type="button" value="+" />
    </div>
  );
};

export default Buttonforcart;
