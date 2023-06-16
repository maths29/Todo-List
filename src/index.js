// import './style.css';

// // const TaskListBlock = document.querySelector('.todo-block');

// // create temp Object for the list tasks
// const toDoTasks = [
//   {
//     description: 'Getting my project done',
//     completed: 'true',
//     index: 1,
//   },
//   {
//     description: 'Buy Book',
//     completed: 'false',
//     index: 2,
//   },
//   {
//     description: 'Pay power ultility Bills',
//     completed: 'true',
//     index: 3,
//   },
//   {
//     description: 'morning routin execise',
//     completed: 'false',
//     index: 4,
//   },
//   {
//     description: 'Study french for 1 hour',
//     completed: 'true',
//     index: 5,
//   },
// ];

// // Create the task from the todoTasks object

// const displayTasks = () => {
//   toDoTasks.forEach((list) => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//         <div class="listLP">
//         <input type="checkbox" name="" id="">
//         <p class="task-to-be-done">${list.description}</p>
//         </div>

//         <div class="trash"><i class="fa-solid fa-trash-can"></i></div>

//         `;
//     // TaskListBlock.appendChild(listItem);
//   });
// };

// // Create the task from the todoTasks object
// displayTasks();

import './style.css';
import {
  displayTasksOnWebPage, addItem, removeItem, storageInfo,
} from './AddandRemoveTask.js';

const TaskListBlock = document.querySelector('.todo-block');
const addInTodo = document.querySelector('.form');

window.addEventListener('load', () => {
  displayTasksOnWebPage();
});

addInTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  addItem();
});

TaskListBlock.addEventListener('click', (e) => {
  if (e.target.id === 'delete') {
    removeItem(e);
  }
  const checkMark = document.createElement('button');
  const insertInput = document.createElement('input');
  if (e.target.id === 'pen') {
    e.target.addEventListener('click', () => {
      insertInput.remove();
      checkMark.remove();
    });

    const top = e.target.parentElement.parentElement.children[0];
    const targetElement = e.target.parentElement.parentElement.children[0].children[1];

    checkMark.className = 'checkEdit';
    checkMark.innerHTML = '<i class="fa-solid fa-check fa-xl"></i>';
    insertInput.placeholder = 'Edit your task';
    insertInput.type = 'text';
    insertInput.className = 'editInput';
    top.appendChild(insertInput);
    top.appendChild(checkMark);

    const one = e.target.parentElement.parentElement.children[0].children[3];

    if (one.className === 'checkEdit') {
      const two = e.target.parentElement.parentElement.children[0].children[2];
      one.onclick = function check(e) {
        if (!two.value) {
          const three = e.target.parentElement.parentElement.parentElement.children[0].children[1];
          targetElement.innerHTML = three.innerHTML;
          insertInput.remove();
          checkMark.remove();
        } else {
          targetElement.innerHTML = two.value;
          insertInput.remove();
          checkMark.remove();
          const Info = storageInfo();
          Info[targetElement.id - 1].description = two.value;
          localStorage.setItem('TasksInfo', JSON.stringify(Info));
        }
      };
    }
  }
});