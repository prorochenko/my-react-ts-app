import React, { useRef, useState } from 'react';
// import { IItem } from '../types/todo';

// interface IProps {
//   onAddTodo: (todo: IItem) => void;
// }

const AddTodo: React.FC<IProps> = props => {
  // const titleInputRef = useRef<HTMLInputElement>(null);
  type OnlyTitle = Pick<IItem, 'title'>;

  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({
      title: e.target.value,
    });
  }

  function sumbitHandler(e: React.FormEvent) {
    e.preventDefault();
    // console.log(titleInputRef.current?.value);
    if (!todo.title) {
      return;
    }
    // console.log(todo.title);
    props.onAddTodo(todo as IItem);
  }
  return (
    <form onSubmit={sumbitHandler}>
      <div>
        <span>Add title</span>
        <input
          type="text"
          id="add-todo"
          onChange={titleHandler}
          // ref={titleInputRef}
        />
      </div>
      <button>Add todo</button>
    </form>
  );
};

export default AddTodo;
