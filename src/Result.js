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

    //Function that determines if a card should render based on the price filter
    renderCard(arg) { 
        if (arg.price >= this.props.price) {
            return <Card name={arg.name} desc={arg.desc} link={arg.link} img={arg.img} price={arg.price} />; 
        }
    }

    render() {
        return (
            <div className="app-display wrap flex">
                {this.state.phones.map((phone) =>
                    this.renderCard(phone)
                )}
            </div>
        );
    }
}