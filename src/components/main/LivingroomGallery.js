import React, { Component } from "react"
import LivingroomItem from "./LivingroomItem";
import Data from "../../data";

export default class KitchenGallery extends Component {
    constructor(props) {
        super(props)

        this.state = { livingRoomItems: Data }
    }
    componentDidMount() {
        let gallery = this.state.livingRoomItems;

        let livingroomGallery = gallery.filter((item) => {
            return item.type === "livingroom"
        })

        this.setState({ livingRoomItems: livingroomGallery })
    }
    render() {
        return (
            <main>
                <section>
                    <h2>Хол</h2>

                    <div id="img-container">
                        {this.state.livingRoomItems.map((item) => {
                            return <LivingroomItem key={item.id} imageUrl={item.imageUrl} description={item.description} price={item.price} />
                        })}
                    </div>
                </section>
            </main>
        )
    }
}