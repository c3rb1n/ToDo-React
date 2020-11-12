import React from "react";
import classes from "./Tasks.module.scss";
import Task from "./Task/Task";

const Tasks = ({tasks, setTask}) => {
    const tasksElements = tasks.map((t, index) => <Task key={index}
                                                        id={index}
                                                        text={t.text}
                                                        tasks={tasks}
                                                        setTask={setTask}/>);

    return (
        <div className={classes.tasks}>
            {tasksElements}
        </div>
    );
};

export default Tasks;