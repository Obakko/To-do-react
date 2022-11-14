import React from "react";
import ToDoItem from "../to-do-list__item/to-do-list__item";
import "./to-do-list.css"

const ToDoList = ({items, onDelete, onDoneElement, onImportantElement, filter, search}) => {

    let arrVisability = [...items]
    
    if (filter==="done"){ arrVisability = items.filter((el) => el.done === true)}
    if (filter==="active"){arrVisability = items.filter((el) => el.done === false)}
    if (search !== "" && search !== 0) {arrVisability = arrVisability.filter((el)=>el.text.toLowerCase().indexOf(search) > -1)}
    
    const itemProps = arrVisability.map((item)=>{
        const {id, ...itemProps} = item
        return (
            <ToDoItem onDelete={()=>onDelete(id)}
                      onDoneElement= {()=>onDoneElement(id)}
                      onImportantElement= {()=>onImportantElement(id)} 
                      key={id} {...itemProps}/>
        )
    })
    return (
        <ul className="list-group to-do-list">
            {itemProps}
        </ul>
    )
}

export default ToDoList



