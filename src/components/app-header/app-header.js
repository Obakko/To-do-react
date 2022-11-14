import React from "react";

const AppHeader = ({done , all}) => {
    return (
        <div className="app-header d-flex">
            <h1 className="col-8">Список задач</h1>
            <p className="col-4">{done()} готова из {all()} задач</p>
        </div>
    )
}

export default AppHeader