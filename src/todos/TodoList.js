import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';
import { displayAlert } from './thunks';
import './TodoList.css';

const TodoList = ({
  todos = [{ text: 'Add more todos' }],
  onRemoveTodoPressed,
  onCompleteTodoPressed,
  onDisplayAlertClicked,
}) => {
  return (
    <div>
      <TodoForm />
      <div className="list-wrapper">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemoveTodoPressed={onRemoveTodoPressed}
            onCompleteTodoPressed={onDisplayAlertClicked}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodoPressed: (todo) => dispatch(removeTodo(todo)),
  onCompleteTodoPressed: (todo) => dispatch(completeTodo(todo)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
