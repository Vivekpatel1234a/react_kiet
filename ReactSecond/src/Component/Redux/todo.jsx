import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './reducer';
function Todo() {
  const [text, setText] = useState('');
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === '') return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Todo List</h1>

      <input
        type="text"
        value={text}
        placeholder="Enter todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todoList.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;