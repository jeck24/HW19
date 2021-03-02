import React, {Component} from "react";
import RandomUser from "./randomUser";


function Users (props) {
    return (
        <div className="content flex-row flex-center">
            <div className="flex-col pt-6">
                <div className="titles flex-row">
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>E-mail</div>
                    <div>Phone</div>
                    <div>Adress</div>
                </div>
                
                {props.data.length > 0 && props.data.map( (user)=> {
                    return <RandomUser 
                    image = {user.picture.thumbnail}
                    key ={user.name.first + user.name.last}
                    name={user.name.first}
                    lastName={user.name.last}
                    email={ user.email}
                    phone={ user.phone}
                    adress={user.location.city + " " +user.location.country}
                    />;
                })
                }
            </div>
        </div>
    );
}
  
export default Users;