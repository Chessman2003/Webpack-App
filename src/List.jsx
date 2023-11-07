import React, {Compoment} from "react";
import ListItem from "./ListItem";
import './List.scss'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        };
    }

    handleItemClick(item) {
        this.setState((prevState) => ({
            selectedItem: prevState.selectedItem === item ? null : item
        }));
    }


    render() {
      const {selectedItem} = this.state;


     return(
        <div>
          <h1>Список элементов</h1><ul>
                <ListItem
                    title="Заголовок 1"
                    text="Текст 1"
                    onItemClick={() => handleItemClick("item1")}
                    selected={selectedItem === "item1"} />

                <ListItem
                    title="Заголовок 2"
                    text="Текст 2"
                    onItemClick={() => handleItemClick("item2")}
                    selected={selectedItem === "item2"} />

                <ListItem
                    title="Заголовок 3"
                    text="Текст 3"
                    onItemClick={() => handleItemClick("item3")}
                    selected={selectedItem === "item3"} />
            </ul>
        </div>
     );
    }
}
export default List