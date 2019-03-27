import React, { Component } from 'react';
import './App.css';

export class Card extends Component {
  render() {
    return (
        <div className="card text-center">
            <div className="card-wrap">
            <div className="card-image background-dark">
                <a href={this.props.link} target="_blank"></a>
            </div>
            <div className="card-content">
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
                <div className="button-wrap">
                    <a className="button1" href={this.props.link} target="_blank">Learn More</a>
                </div>
            </div>
            </div>
        </div>
    );
  }
}