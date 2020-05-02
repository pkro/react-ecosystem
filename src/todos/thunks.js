import {
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  createTodo,
  removeTodo,
  completeTodo,
} from './actions';

// a thunk  returns a function that contains the logic if the thunk is triggered
export const displayAlert = (text) => () => {
  alert(text);
};

// the returned function gets passed 2 arguments when the thunk is triggered:
// - dispatch
// - getState
export const loadTodos = () => async (dispatch, getState) => {
  dispatch(loadTodosInProgress());
  try {
    const response = await fetch(`http://localhost:8080/todos`);
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  const body = JSON.stringify({ text });
  console.log(body);
  try {
    const response = await fetch('http://localhost:8080/todos', {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete',
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const toggleTodoCompletedRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      { method: 'post' }
    );
    const todo = await response.json();
    dispatch(completeTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
