import {
  REMOVE_TODO,
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_SUCCESS,
} from './actions';

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: [...state.data, todo],
      };
    }
    case REMOVE_TODO: {
      const { todo: removedTodo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== removedTodo.id),
      };
    }
    case MARK_TODO_AS_COMPLETED: {
      const { todo: updatedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        ),
      };
      //return state.filter((_todo) => _todo.id !== todo.id).concat([todo]);
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, isLoading: false, data: todos };
    }

    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
