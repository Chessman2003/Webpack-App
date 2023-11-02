import {Compoment} from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    render() {
        const items = ["пункт 1", "пункт 2", "пункт 3"];

        return(
            <ul>
                {items.map((item, index) => (
                    <ListItem key = {index} text = {item} />
                ))}
            </ul>
        );
    }
};

export default List