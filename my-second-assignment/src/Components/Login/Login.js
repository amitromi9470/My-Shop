import React from "react";
import {useSelector} from 'react-redux';
import "./Login.css";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const Login=(props)=>{
    const registeredUser = useSelector(state => state.register)
    console.log(registeredUser)
    const onClickHandler = () => {

    }
    return(
        <div className="Login">
            <Heading name='My Shop'/>
            <h1>Enter Username</h1>
            <input/>
            <h1>Enter Password</h1>
            <input/>
            <Button onClick={onClickHandler}/>
        </div>

    )
}

export default  Login;