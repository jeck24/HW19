import React from "react";
import '../App.css';

function randomUser(props){
    return (
        <div className="randomUser">
            <img alt = "img" src={props.image} className="image"/>
            <div className = "firstName">First name: {props.name}</div>
            <div className = "lastName">Last name: {props.lastName}</div>
            <div className = "email">email: {props.email}</div>
            <div className = "phone">Phone Number: {props.phone}</div>
            <div className = "adress">Home Address: {props.adress}</div>             
        </div>
    );
}
  
export default randomUser;