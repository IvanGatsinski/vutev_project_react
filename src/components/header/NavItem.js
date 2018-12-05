import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class NavItem extends Component {
    constructor(props) {
        super(props)

        this.state = { text: this.props.navItemText }
    }
    render() {
        let currentRoute;

        switch (this.state.text) {
            case "Начало": currentRoute = "/"; break;
            case "Хол": currentRoute = "/livingroom"; break;
            case "Кухня": currentRoute = "/kitchen"; break;
            case "Баня": currentRoute = "/bathroom"; break;
        }
        return (
            <li>
                <Link to={currentRoute}>{this.state.text}</Link>
            </li>
        )
    }
}