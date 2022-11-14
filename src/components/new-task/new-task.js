import React from "react";
import "./new-task.css"

export default class NewTask extends React.Component {
    constructor () {
        super()
        this.state = {
            value: ""
        }
    }

    onChangeValue = (e) => {
        this.setState(
            {value: e.target.value}
        )
    
    }

    onSubmitTask = (e) => {
        e.preventDefault()
        this.props.greatNewTask(this.state.value)
        this.setState({value:""})
    }

    render() {
        return (
        <form className="d-flex" onSubmit={this.onSubmitTask}>
            <input onChange={this.onChangeValue} type="text" className="form-control" placeholder="Ввод для новой задачи" value={this.state.value}></input>
            <button type="submit" className="btn btn-outline-primary">Создать</button>
        </form>)
    }
}
