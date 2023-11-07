import React, {Compoment} from "react";
import ListItem from "../ListItem/ListItem";
import './List.scss'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            elements: [
                {
                    id: '1',
                    title: `Заголовок 1`,
                    text: `Текст 1`
                },
                {
                    id: '2',
                    title: `Заголовок 2`,
                    text: `Текст 2`
                },
                {
                    id: '3',
                    title: `Заголовок 3`,
                    text: `Текст 3`
                },
            ]
        };
    }

    handleItemClick(item) {
        this.setState((prevState) => ({
            ...prevState,
            selectedItem: prevState.selectedItem === item ? null : item
        }));
    }


    render() {
      const {selectedItem, elements} = this.state;

     return(
        <div>
          <h1>Список элементов</h1>
          <ul>
            {
                elements.map((e)=>{
                    return (
                    <ListItem key={e.id}
                        title={e.title}
                        text={e.text}
                        onItemClick={() => this.handleItemClick(e.id)}
                        selected={selectedItem === e.id} 
                    />
                    )
                })
            }
            </ul>
        </div>
     );
    }
}
export default List