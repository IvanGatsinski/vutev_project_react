import React, { Component } from "react";
import Navigation from "../header/Navigation";
import LivingroomGallery from "../main/LivingroomGallery";

export default class Livingroom extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <LivingroomGallery />
            </div>
        )
    }
}