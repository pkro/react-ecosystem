import {
  REMOVE_TODO,
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_SUCCESS,
} from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return [...state, todo];
    }
    case REMOVE_TODO: {
      const { todo } = payload;
      return state.filter((_todo) => _todo.id !== todo.id);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state
        .filter((todo) => todo.text !== text)
        .concat([{ text, isCompleted: true }]);
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }

    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:

    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};
