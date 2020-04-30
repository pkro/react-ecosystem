import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { removeTodo } from './actions';

import './TodoList.css';

const TodoList = ({
  todos = [{ text: 'Add more todos' }],
  onRemoveTodoPressed,
}) => {
  return (
    <div>
      <div className="list-wrapper">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemoveTodoPressed={onRemoveTodoPressed}
          />
        ))}
      </div>
      <TodoForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemoveTodoPressed: (todo) => dispatch(removeTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
