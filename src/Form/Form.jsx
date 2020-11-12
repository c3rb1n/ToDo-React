import React, {useState} from "react";
import classes from "./Form.module.scss";

const Form = ({tasks, setTask}) => {
    const [inputText, setInputText] = useState("");

    const onAddButtonClick = () => {
        if (inputText) {
            setTask([...tasks, {text: inputText}]);
            setInputText("");
        }
    };

    return (
        <div className={classes.form}>
            <input className={classes.form__input}
                   type="text"
                   onChange={(e) => setInputText(e.currentTarget.value)}
                   value={inputText}
                   placeholder="Max length is 20 symbols"
                   maxLength={20}/>
            <button className={classes.form__add} onClick={onAddButtonClick}>Add</button>
        </div>
    );
};

export default Form;