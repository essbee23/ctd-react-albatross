import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import style from "./AddTodoForm.module.css"
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({ title: todoTitle });
        setTodoTitle("");
    };

    return (
        <div className="form">
        <form onSubmit={handleAddTodo}>
                <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Task
                </InputWithLabel>
            <button className={style.AddButton} type="submit">Add</button>
            </form>
        </div>
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
  };
  
export default AddTodoForm;

