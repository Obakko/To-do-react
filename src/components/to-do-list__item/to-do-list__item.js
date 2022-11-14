import React from "react";
import "./to-do-list__item.css"

 const ToDoItem = ({done,text, important, onDoneElement, onImportantElement, onDelete})=>{
        let style = "cursor"
        if (done){
            style += " perfomans-done"
        }
        
        let fiilButton = " bi-patch-exclamation"
        if(important){
            fiilButton = " bi-patch-exclamation-fill"
            style += " important"
        }

        return (
            <li className="list-group-item">
                <span className={style} onClick={onDoneElement}>{text}</span>
                <div className="btn-group btn-state">
                    <button type="button" onClick= {onDelete} className="btn btn-light bi bi-trash"></button>
                    <button type="button" className={"btn btn-light bi" + fiilButton} onClick={onImportantElement}></button>
                </div>
            </li>
        )
    }

export default ToDoItem