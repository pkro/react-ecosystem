import React from 'react';
import { hot } from 'react-hot-loader';
import AppContainer from './ui_styled_components/AppContainer';
import TodoList from './todos/TodoList';
const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default hot(module)(App);
