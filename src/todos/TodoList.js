import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { completeTodo } from './actions';
import { loadTodos, removeTodoRequest } from './thunks';
import './TodoList.css';

const TodoList = ({
  todos = [{ text: 'Add more todos' }],
  onRemoveTodoPressed,
  onCompleteTodoPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = (
    <div className="animate-flicker">Loading todos...</div>
  );

  const content = (
    <div>
      <TodoForm />
      <div className="list-wrapper">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemoveTodoPressed={onRemoveTodoPressed}
            onCompleteTodoPressed={onCompleteTodoPressed}
          />
        ))}
      </div>
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodoPressed: (id) => dispatch(removeTodoRequest(id)),
  onCompleteTodoPressed: (todo) => dispatch(completeTodo(todo)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
