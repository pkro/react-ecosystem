import { createSelector } from 'reselect';

export const getTodosLoading = (state) => {
  return state.todos.isLoading;
};
export const getTodos = (state) => {
  return state.todos.data;
};

// higher order selectors that use low level selectors
export const getIncompleteTodos = createSelector(
  getTodos, // we can add multiple selectors here
  (todos) => todos.filter((todo) => !todo.isCompleted)
);

export const getCompleteTodos = createSelector(
  getTodos, // we can add multiple selectors here, and the result will be in the final argument
  (todos) => todos.filter((todo) => todo.isCompleted)
);

// example multiple selectors:
// export const getCompleteTodos = createSelector(
//   getTodos, // we can add multiple selectors here, and the result will be in the final argument
//   getTodosLoading,
//   (todos, isLoading) =>
//     isLoading ? [] : todos.filter((todo) => !todo.isCompleted)
// );
