import React, { Component } from "react";
import Navigation from "../header/Navigation";
import KitchenGallery from "../main/KitchenGallery";

export default class Kitchen extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <KitchenGallery />
            </div>
        )
    }
}