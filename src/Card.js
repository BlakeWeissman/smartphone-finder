import React, { Component } from 'react';
import './App.css';

export class Card extends Component {
  render() {
    return (
        <div className="card text-center">
            <div className="card-wrap">
                <div className="card-image" style={{backgroundImage: "url(" + this.props.img + ")"}}>
                    <a href={this.props.link} target="_blank"></a>
                </div>
                <div className="card-content">
                    <h2 className="card-content">{this.props.name}</h2>         
                    <h3 className="card-content">{"$" + this.props.price}</h3>
                    <p className="card-content">{this.props.desc}</p>
                    <div className="button-wrap">
                        <a className="button1" href={this.props.link} target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}