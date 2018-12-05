import React, { Component } from "react"
import GalleryItem from "./GalleryItem";

export default class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = { galleryData: this.props.mainGallery };
    }

    render() {
        return (
            <main>
                <section>
                    <h2>Обща Галерия</h2>
                    <div id="img-container">
                        {this.state.galleryData.map((item) => {
                            return <GalleryItem key={item.id} imageUrl={item.imageUrl} description={item.description} price={item.price} />
                        })}
                    </div>
                </section>
            </main>
        )
    }
}