import './style.css';

import { updateTaskStatus } from './completed.js';

let tasksLocal = [];

const loadTasksFromLocalStorage = () => {
  tasksLocal = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
};

const displayTaskElement = (task) => {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-row');

  const taskIndex = document.createElement('span');
  taskIndex.classList.add('task-index');
  taskIndex.value = task.index;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  checkbox.checked = task.completed;

  const taskText = document.createElement('input');
  taskText.classList.add('task-text');
  taskText.value = task.name;
  if (task.completed) {
    taskText.classList.add('completed-task');
  }

  const moreIcon = document.createElement('span');
  moreIcon.classList.add('more-icon');
  moreIcon.classList.add('material-symbols-sharp');
  moreIcon.innerHTML = 'more_vert';

  const deleteIcon = document.createElement('span');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.classList.add('material-symbols-sharp');
  deleteIcon.classList.add('hide');

  deleteIcon.innerHTML = 'delete';

  taskItem.appendChild(taskIndex);
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(moreIcon);
  taskItem.appendChild(deleteIcon);

  return taskItem;
};

function activateTaskInputListeners() {
  const taskInput = document.querySelectorAll('.task-text');
  taskInput.forEach((ti) => {
    const parent = ti.parentNode;
    const taskIndex = parent.getElementsByClassName('task-index')[0].value;
    ti.addEventListener('change', () => {
      updateTaskText(ti.value, taskIndex, tasksLocal);
      loadTasksFromLocalStorage();
    });
  });
}

function activateListeners() {
  activateTaskInputListeners();
}

document.getElementById('add-task-btn').addEventListener('click', () => {
  const taskInput = document.getElementById('task-input');
  const taskName = taskInput.value.trim();
  const taskList = document.getElementById('task-list');
  if (taskName !== '') {
    createTaskElement(taskName, tasksLocal);
    loadTasksFromLocalStorage();
    taskList.innerHTML = '';

    if (tasksLocal.length > 0) {
      tasksLocal.forEach((task) => {
        const taskElement = displayTaskElement(task);
        taskList.appendChild(taskElement);
      });
      activateListeners();
      taskInput.value = '';
    }
  }
});

window.onload = () => {
  loadTasksFromLocalStorage();
  const taskList = document.getElementById('task-list');
  if (tasksLocal.length > 0) {
    tasksLocal.forEach((task) => {
      const taskElement = displayTaskElement(task);
      taskList.appendChild(taskElement);
    });
    activateTaskInputListeners();
  }
};
