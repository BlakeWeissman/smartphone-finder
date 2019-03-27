import React, { Component } from "react";
import { Card } from "./Card.js";
import { PhoneList } from "./PhoneList.js"

export class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: PhoneList
        }
    }
    render() {      
        return (
            <div className="app-display wrap flex">
                {this.state.phones.map((phone) =>
                    <Card name={phone.name} desc={phone.desc} link={phone.link} img={phone.img} price={phone.price} />
                )}
            </div>
        );
    }
}