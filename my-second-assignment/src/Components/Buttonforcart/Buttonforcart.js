import React,{useState} from "react";
import "./Buttonforcart.css";
import { useDispatch } from "react-redux";

const Buttonforcart = () => {
  const dispatchCart = useDispatch();

  const [cartValue,setCartValue]=useState(0);

  const onClickAddHandler = () => {
      setCartValue(cartValue+1);

    dispatchCart({
      type: "ADD_TO_CART",
    });
  };

  const onClickSubHandler = () => {
    setCartValue(cartValue-1);
    dispatchCart({
      type: "REMOVE_FROM_CART",
    });
  };

  return (
    <div className="flex-container">
      <input type="button" className="button" value="Add To Cart" />
      <input type="button" value="-" onClick={onClickSubHandler} />
      <input className="noOfItems" value={cartValue} min="0"/>
      <input type="button" value="+" onClick={onClickAddHandler} />
    </div>
  )
};

export default Buttonforcart;
