export const getTodosLoading = (state) => {
  return state.todos.isLoading;
};
export const getTodos = (state) => {
  return state.todos.data;
};

export const getIncompleteTodos = (state) => {
  return state.todos.data.filter((todo) => !todo.isCompleted);
};

export const getCompleteTodos = (state) => {
  return state.todos.data.filter((todo) => todo.isCompleted);
};
