import React, { useState } from 'react';

const Home = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState('all'); // line 6

  const addTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedList = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(updatedList);
  };

  const toggleCompleted = (indexToToggle) => {
    const updatedList = taskList.map((task, index) =>
      index === indexToToggle ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedList);
  };

  // Filter task list based on the selected filter
  const filteredTaskList = taskList.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'notCompleted') return !task.completed;
    return true; // 'all' filter
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Enter task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      
      <fieldset>
        <h3>Task List :</h3>
      <ol>
        {filteredTaskList.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => toggleCompleted(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
      </fieldset>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('notCompleted')}>Not Completed</button>
      </div>
    </div>
  );
};

export default Home;
