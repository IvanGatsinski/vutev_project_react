import React, { Component } from "react";
import Navigation from "../header/Navigation";
import BathroomGallery from "../main/BathroomGallery";

export default class Bathroom extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <BathroomGallery />
            </div>
        )
    }
}