import React, { Component } from "react";
import { Card } from "./Card.js";
import { Phone } from "./Phone.js";

export class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneList: [
                new Phone("iPhone XS", "DESC", "LINK", "IMG", "iOS", "2018", "2436x1125", "Apple A12 Bionic", "4gb", false),
                new Phone("Samsung Galaxy S10", "DESC", "LINK", "IMG", "Android", "2019", "3040x1440", "Snapdragon 855", "8gb", true),
                new Phone("Google Pixel 3", "DESC", "LINK", "IMG", "Android", "2018", "2160x1080", "Snapdragon 845", "4gb", false)
            ]
        }
    }

    render() {      
        return (
            <div class="wrap flex">
                {this.state.phoneList.map((phone) =>
                    <Card name={phone.name} desc={phone.desc} link={phone.link} />
                )}
            </div>
        );
    }
}