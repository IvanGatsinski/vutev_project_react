import React, { Component } from "react";

export default class BathroomItem extends Component {

    render() {
        return (
            <div className="wrapper-content">
                <p className="img-holder">
                    <a href={this.props.imageUrl}>
                        <img src={this.props.imageUrl}>
                        </img>
                    </a>
                </p>
                <p className="description">Описание: {this.props.description}</p>
                <p className="price">Цена: <span> {this.props.price}</span></p>
            </div>
        )
    }
}