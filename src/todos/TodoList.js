import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import './TodoList.css';

const TodoList = ({ todos = [{ text: 'hello' }] }) => {
  return (
    <div>
      <div className="list-wrapper">
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
};

export default TodoList;
