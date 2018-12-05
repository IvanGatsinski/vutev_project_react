import React, { Component } from "react"
import KitchenItem from "./KitchenItem";
import Data from "../../data";

export default class KitchenGallery extends Component {
    constructor(props) {
        super(props)

        this.state = { kitchenItems: Data }
    }
    componentDidMount() {
        let gallery = this.state.kitchenItems;

        let kitchenGallery = gallery.filter((item) => {
            return item.type === "kitchen"
        })

        this.setState({ kitchenItems: kitchenGallery })
    }
    render() {
        return (
            <main>
                <section>
                    <h2>Кухня</h2>

                    <div id="img-container">
                        {this.state.kitchenItems.map((item) => {
                            return <KitchenItem key={item.id} imageUrl={item.imageUrl} description={item.description} price={item.price} />
                        })}
                    </div>
                </section>
            </main>
        )
    }
}