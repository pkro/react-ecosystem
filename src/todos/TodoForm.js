import React, { useState } from 'react';
import './TodoForm.css';
const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="todo-form">
      <input
        type="text"
        name="todo"
        id="todo"
        className="todo-input"
        value={inputValue}
        placeholder="todo"
        onChange={setInputValue}
      />
      <button className="btn btn-primary">Create Todo</button>
    </div>
  );
};

export default TodoForm;
