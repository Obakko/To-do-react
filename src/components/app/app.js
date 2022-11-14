import React from "react";
import ToDoList from "../to-do-list/to-do-list";
import AppHeader from "../app-header/app-header";
import NewTask from "../new-task/new-task";
import FiltrBuild from "../filtr-build/filtr-build";
import "./app.css"

let chek = 100
const createNewStateElement = (text) => {
    return{
        text: text,
        important: false,
        done: false,
        id: chek++
    }
}

/*const saveStateNow = (arr) => {
    localStorage.setItem("stateToDo", JSON.stringify(arr))
}
const getStateFromLocal = () => {
    let state = localStorage.getItem("stateToDo")
    return JSON.parse(state)
}*/

export default class App extends React.Component {
    constructor () {
        super()
        this.state = {
            arrTask : [
                createNewStateElement("Изучить реакт"),
                createNewStateElement("Сделать проект"),
                createNewStateElement("Составить Резюме"),
                createNewStateElement("выпить отметить"),
            ],
            filter: "all",
            search: "",
        }
    }

    valueSearch = (text) => {
        this.setState ({search: text})
    }

    onFilterTask = (filter) =>{
        this.setState({filter: filter})
    }

    greatNewTask = (text) => {
        const newElem = createNewStateElement(text);
        const newTask = [...this.state.arrTask,newElem]
        this.setState({arrTask: newTask})
    }

    getChekDone = () => {
        return this.state.arrTask.filter((el)=>el.done === true).length
    }

    getAllTask = () => {
        return this.state.arrTask.length
    }
    
    onDoneElement = (id) =>{
        this.setState(this.chengeElement(this.state.arrTask,id,"done"))
    }

    onImportantElement = (id) =>{
        this.setState(this.chengeElement(this.state.arrTask,id,"important"))
    }

    chengeElement= (arr,id,text) => {
        const indx = arr.findIndex(el => el.id === id)
        const newObj = arr[indx]
        const newElem = {...newObj, [text]: !newObj[text] }
        const newTask = [...arr.slice(0,indx),newElem,...arr.slice(indx+1)]

    return { arrTask: newTask}
    }

    onDelete = (id) => {
        this.setState(({arrTask})=>{
            const newArr = arrTask.filter((item)=>{
                return item.id !== id
            })
            return {arrTask : newArr}
        })
    }

    render() {
        return(
            <div className="container app">
                <AppHeader done = {this.getChekDone} all = {this.getAllTask}/>
                <FiltrBuild onFilterTask={this.onFilterTask}
                            filter = {this.state.filter}
                            valueSearch = {this.valueSearch}   
                            />
                <ToDoList onDelete = {this.onDelete} 
                          onDoneElement = {this.onDoneElement} 
                          onImportantElement = {this.onImportantElement} 
                          items={this.state.arrTask}
                          filter = {this.state.filter}
                          search = {this.state.search}  
                          />
                <NewTask greatNewTask={this.greatNewTask}/>
            </div>
        )
    }   
}
