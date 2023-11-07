import React, {Component} from "react";
import './ListItem.scss'

class ListItem extends React.Component {
    render() {
        const {title, text, onItemClick, selected} = this.props;

        const newClassname = `listItem ${selected ? "selected" : ""}`

        return(
            <li
                onClick={onItemClick}
                className={newClassname}
            >
                <h2>title</h2>
                <p>text</p>
            </li>
        );
  
    }
}
export default ListItem