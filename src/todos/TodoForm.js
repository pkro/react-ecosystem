import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';

import './TodoForm.css';
const TodoForm = ({ todos, onCreatePressed }) => {
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
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

// represents complete redux state
// take state and returns the pieces that the components needs; these then can be accessed in props
const mapStateToProps = (state) => ({
  todos: state.todos,
});

// properties of the returned object can be accesses in component, like mapStateToProps
// difference: it takes "dispatch" instead of state => the redux actions needed
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
  // -> now we have a function "onCreatePressed" in the props that takes a string argument (text) that calls the createTodo action
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
