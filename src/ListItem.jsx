import React, {Component} from "react";

class ListItem extends React.Component {
    
    render() {
        const {text, header} = this.props
        return (
            <li>
                <h2>{header}</h2>
                <p>{text}</p>
            </li>
        );
    }
};

export default ListItem