// taskManager.ts

interface Task {
  text: string;
  completed: boolean;
}

const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

let tasks: Task[] = [];

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const task: Task = {
      text: taskText,
      completed: false,
    };
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
});

const renderTasks = (): void => {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task.completed ? `<s>${task.text}</s>` : task.text} 
      <button onclick="toggleComplete(${index})">Complete</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
};

const toggleComplete = (index: number): void => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
};

const deleteTask = (index: number): void => {
  tasks.splice(index, 1);
  renderTasks();
};
