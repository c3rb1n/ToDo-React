import React, {useState} from "react";
import "./App.scss";
import Form from "./Form/Form";
import Tasks from "./Tasks/Tasks";

const App = () => {
    const [tasks, setTask] = useState([]);

    return (
        <div className="app">
            <div className="app__toDo">
                <Form tasks={tasks} setTask={setTask}/>
                <Tasks tasks={tasks} setTask={setTask}/>
            </div>
        </div>
    );
};

export default App;
