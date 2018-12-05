import React, { Component } from "react";
import Navigation from "../header/Navigation";
import Gallery from "../main/Gallery";
import Data from "../../data.json";

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = { galleryData: Data }
  }

  render() {
    return (
      <div>
        <Navigation />
        <Gallery mainGallery={this.state.galleryData} />
      </div>
    )
  }
}