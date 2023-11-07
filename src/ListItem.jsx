import React, {Component} from "react";

class ListItem extends React.Component {
    render() {
        const {title, text, onItemClick, selected} = this.props;

        return(
            <li
                onClick={onItemClick}
                className={listItem ${selected ? "selected" : ""}}
            >
                <h2>title</h2>
                <p>text</p>
            </li>
        );
  
    }
}
export default ListItem