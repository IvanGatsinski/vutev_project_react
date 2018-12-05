import React, { Component } from "react"
import BathroomItem from "./BathroomItem";
import Data from "../../data";

export default class KitchenGallery extends Component {
    constructor(props) {
        super(props)

        this.state = { bathroomItems: Data }
    }
    componentDidMount() {
        let gallery = this.state.bathroomItems;

        let bathroomGallery = gallery.filter((item) => {
            return item.type === "bathroom"
        })

        this.setState({ bathroomItems: bathroomGallery })
    }
    render() {
        return (
            <main>
                <section>
                    <h2>Баня</h2>
                    <div id="img-container">
                        {this.state.bathroomItems.map((item) => {
                            return <BathroomItem key={item.id} imageUrl={item.imageUrl} description={item.description} price={item.price} />
                        })}
                    </div>
                </section>
            </main>
        )
    }
}