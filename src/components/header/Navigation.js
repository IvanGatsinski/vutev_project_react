import React, { Component } from "react";
import NavItem from "./NavItem";

export default class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            headerNav: {
                itemsText: ["Начало", "Хол", "Кухня", "Баня"]
            }
        }
    }

    render() {
        return (
            <header>
                <section>
                    <div id="header-wrapper">
                        <ul id="menu">
                            {this.state.headerNav.itemsText.map((itemText, index) => {
                                return <NavItem key={index} navItemText={itemText} />
                            })}
                        </ul>
                    </div>
                </section>
            </header>
        )
    }
}