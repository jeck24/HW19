import React from "react";
import RandomUser from "./randomUser";
import '../App.css';

function Users (props) {
    return (
        <div className="wholeTable">
            <div className="upperTable">
                <div className="firstLine">
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>@</div>
                    <div>Contact</div>
                    <div>Lives at</div>
                </div>
                
                {props.data.length > 0 && props.data.map((user)=> {
                    const bring = user.name;
                    return <RandomUser 
                    image = {user.picture.thumbnail}
                    key ={bring.first + user.name.last}
                    name={bring.first}
                    lastName={bring.last}
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