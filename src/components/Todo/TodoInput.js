import React, { useState } from 'react';

const TodoInput = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoChecked, setTodoChecked] = useState(false);
  console.log(todoChecked, setTodoChecked, setTodoTitle);
  function handleChange(e) {
    setTodoTitle(e.target.value);
  }
  return (
    <div>
      <input type="text" name="title" value={todoTitle} onChange={handleChange} />
    </div>
  );
};

export default TodoInput;
