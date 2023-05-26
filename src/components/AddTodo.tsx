import React, { useRef } from 'react';

const AddTodo: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  function sumbitHandler(e: React.FormEvent) {
    e.preventDefault();
    console.log(titleInputRef.current?.value);
  }
  return (
    <form onSubmit={sumbitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" ref={titleInputRef} />
      </div>
      <button>Add todo</button>
    </form>
  );
};

export default AddTodo;
