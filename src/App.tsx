import React from 'react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  const todos = [
    { id: '1', title: 'text' },
    { id: '2', title: 'text' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={todos} />
        <AddTodo />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
