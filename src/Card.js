import React, { Component } from 'react';
import './App.css';

export class Card extends Component {
  render() {
    return (
        <div className="card text-center">
            <div className="card-wrap">
            <div className="card-image background-dark">
                <a href={this.props.phoneLink} target="_blank"></a>
            </div>
            <div className="card-content">
                <h2>{this.props.phoneName}</h2>
                <p>{this.props.phoneDesc}</p>
                <div class="button-wrap">
                    <a class="button1" href={this.props.phoneLink} target="_blank">Learn More</a>
                </div>
            </div>
            </div>
        </div>
    );
  }
}