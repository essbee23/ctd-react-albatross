import React from "react";
import style from "./TodoListItem.module.css"
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo })=>{
    return (
        <div>
        <li className={style.ListItem}>
                <span className={style.item}>{todo.title}</span>
                <button className={style.btn} type="button" onClick={() =>
                    onRemoveTodo(todo.id)}>
                Remove
            </button>
        </li>
        </div>
    );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};



export default TodoListItem;