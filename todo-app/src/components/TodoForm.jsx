import React, { useState } from 'react';
import './style.css';

function TodoForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newTask = { title, description };
    // Pass the new task to the parent component
    addTask(newTask);
    
    event.target.reset();
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='formElements'>
      <label htmlFor='todo'>
        <input 
          type='text'
          name='todo'
          id='todo'
          placeholder='Enter your Task'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label htmlFor='description'>
        <input 
          type='text'
          name='description'
          id='description'
          placeholder='Task Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
