import React, {Compoment} from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    render() {
        const items = [{
            header: `Заголовок 1`,
            text: `пункт 1`
        }, {
            header: `Заголовок 2`,
            text: `пункт 2`
        }, {
            header: `Заголовок 3`,
            text: `пункт 3`
        }];

        return(
            <ul>
                {items.map((item, index) => (
                    <ListItem 
                        key={index} 
                        {...item}
                    />
                ))}
            </ul>
        );
    }
};

export default List