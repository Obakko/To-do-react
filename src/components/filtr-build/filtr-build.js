import React from "react";
import "./filtr-build.css"

export default class FiltrBuild extends React.Component {
    constructor() {
        super()
        this.state = {
            activeClass: [" btn-active","",""],
            searchValue: ""
        }
    }

    getValueFromInput = (e) => {
        this.setState({searchValue: e.target.value}) 
        this.props.valueSearch(e.target.value.toLowerCase())
    }

    getStyleActiveClassOnButton = (status) => {
        this.setState(()=>{
            if (status ==="all")return {activeClass: [" btn-active","",""]};
            if (status ==="done")return {activeClass: [""," btn-active",""]};
            if (status ==="active")return {activeClass: ["",""," btn-active"]};
        })
        this.props.onFilterTask(status)
    }
    


    render () {
        return (
            <div className="d-flex">
                <input onChange={this.getValueFromInput} type="text" value={this.state.searchValue} className="form-control cc" placeholder="Ввод для поиска"></input>
                <div className="button-group col " role="group">
                    <button type="button" onClick={()=>this.getStyleActiveClassOnButton("all")} className={"btn btn-outline-primary" + this.state.activeClass[0]}>All</button>
                    <button type="button" onClick={()=>this.getStyleActiveClassOnButton("active")} className={"btn btn-outline-primary" + this.state.activeClass[2]}>Active</button>
                    <button type="button" onClick={()=>this.getStyleActiveClassOnButton("done")} className={"btn btn-outline-primary" + this.state.activeClass[1]}>Done</button>
                </div>
            </div>
        )
    }
}

