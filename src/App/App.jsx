import React from "react";
import List from "../List/List";


export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Мой список</h1>
                <List />
            </div>
        );
    }
}