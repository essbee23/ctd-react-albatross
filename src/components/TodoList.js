import React from 'react';
import TodoListItem from "./TodoListItem"
import style from "./TodoList.module.css"
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <div>
    <ul className = {style.ListBox}>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          title={todo.Title}
          onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;