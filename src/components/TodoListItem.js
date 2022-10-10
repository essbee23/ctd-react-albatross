import React from "react";
import style from "./TodoListItem.module.css"
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo })=>{
    return (
        <div>
        <li className={style.ListItem} >
                {todo.title}
                <button className={style.btn} type="button" onClick={() => onRemoveTodo(todo.id)}>
                    <img className={style.img} src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F223479%2Fisolated%2Fpreview%2F8ecc75c9d0cf6d942cce96e196d4953f-trash-bin-icon-flat-by-vexels.png&f=1&nofb=1&ipt=a1e2ab67c24c6d39615561b30e6a03845b7ff024fb49d37250ef71696470f6e7&ipo=images" width = "16px" alt = "trashcan"></img>
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