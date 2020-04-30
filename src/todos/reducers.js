import { REMOVE_TODO, CREATE_TODO } from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      // { just so we can const {text} == ... twice}
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      //return { ...state, todos: [...state.todos, newTodo] };
      return [...state, newTodo];
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
