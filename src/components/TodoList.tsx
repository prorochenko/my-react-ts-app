import React from 'react';

interface IItems {
  id: string;
  title: string;
}

interface IPoprs {
  todos: IItems[];
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
