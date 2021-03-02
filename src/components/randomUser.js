import React from "react";

function randomUser(props){
    return (
        <div className="randomUser flex-row">
            <img alt = "img" src={props.image} className="image"/>
            <div className = "user" id="firstName">{props.name}</div>
            <div className = "user" id="lastName">{props.lastName}</div>
            <div className = "user" id="email">{props.email}</div>
            <div className = "user" id="phone">{props.phone}</div>
            <div className = "user" id="adress">{props.adress}</div>             
        </div>
    );
    
}
  
export default randomUser;