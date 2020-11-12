import React from "react";
import classes from "./Task.module.scss";

const Task = ({id, text, tasks, setTask}) => {
    const onRemoveButtonClick = () => {
        setTask(tasks.filter((t, index) => id !== index));
    };

    return (
        <div className={classes.task}>
            <span>{text}</span>
            <button className={classes.task__remove} onClick={onRemoveButtonClick}>Remove</button>
        </div>
    );
};

export default Task;