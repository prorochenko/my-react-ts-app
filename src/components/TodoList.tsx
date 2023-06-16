import React from 'react';
import { IItem } from '../types/todo';

interface IPoprs {
  todos: IItem[];
  onRemoveTodo: (id: string) => void;
}

interface IState {
  count: number;
}

const TodoList: React.FC<IPoprs> = props => {
  return (
    <ul>
      {props.todos.map(item => {
        return (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <button onClick={() => props.onRemoveTodo(item.id)}>Remove</button>
          </li>
        );
      })}
    </ul>
  );
};

// class TodoList extends React.Component<IPoprs, IState> {
//   stateHandler() {
//     this.setState(({ count }) => {});
//   }
//   render() {
//     return null;
//   }
// }

export default TodoList;
