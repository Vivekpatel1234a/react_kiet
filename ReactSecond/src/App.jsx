import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Component/Redux/store';
import Todo from './Component/Redux/todo';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
