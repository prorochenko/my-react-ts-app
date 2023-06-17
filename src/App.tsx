import React, { useState } from 'react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { IItem } from './types/todo';

const App: React.FC = () => {
  // const todos = [
  //   { id: '1', title: 'text' },
  //   { id: '2', title: 'text' },
  // ];

  const [todos, setTodos] = useState<IItem[]>([]);

  function todoAddHandler(todo: IItem) {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          title: todo.title,
        },
      ];
    });
  }

  function todoRemoveHandler(id: string): void {
    setTodos(prevTodos => {
      return prevTodos.filter(item => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo onAddTodo={todoAddHandler} />
        <TodoList todos={todos} onRemoveTodo={todoRemoveHandler} />
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
