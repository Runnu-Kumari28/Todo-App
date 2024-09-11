import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [tasks, setTasks] = useState([]); // State to store tasks

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* Render TodoForm and pass addTask as a prop */}
      <TodoForm addTask={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong> - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

