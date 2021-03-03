import React, { Component } from "react";
import Users from "./Users";
import API from "../utils/API";
import '../App.css';

class List extends Component {
    state = {
        results: [], temp: []
    };
    
    handleInputChange = event => {
        const{prop} = event.target;
        this.setState(
            {
                temp: this.state.results.filter((item) => {
                    if(item.email.toLowerCase().includes(prop) ||
                    item.name.last.toLowerCase().includes(prop) ||
                    item.name.first.toLowerCase().includes(prop)) 
                    return item;
                })
            });
    };
    
    searchUser = async ()=>{
        document.getElementById("searchInput").prop = "";
        const item = API.getUser()
        .then(res => {
            res.data.item.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
            this.setState({item: res.data.item });
            this.setState({temp: res.data.item });
        });
        return item;
    };
    
    componentDidMount() {
        API.getUser().then(res => {
            res.data.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
            this.setState({results: res.data.results });
            this.setState({temp: res.data.results });
        });
    }
    
    render() {
        return (
        <>
            <header className="header">
                <h1>Unit 19 React Homework: Employee Directory</h1>
                <div className="firstSection">
                    <input className="searchInput" type="text" onChange={this.handleInputChange} placeholder="Who to search?"/>
                    <button className="searchBtn" onClick={this.searchUser}>Search</button>
                </div>
            </header>
            <Users data={this.state.temp} />
        </>
        );
    }
}

export default List;