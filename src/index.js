import './style.css';

const TaskListBlock = document.querySelector('.todo-block');

// create temp Object for the list tasks
const toDoTasks = [
  {
    description: 'Getting my project done',
    completed: 'true',
    index: 1,
  },
  {
    description: 'Buy Book',
    completed: 'false',
    index: 2,
  },
  {
    description: 'Pay power ultility Bills',
    completed: 'true',
    index: 3,
  },
  {
    description: 'morning routin execise',
    completed: 'false',
    index: 4,
  },
  {
    description: 'Study french for 1 hour',
    completed: 'true',
    index: 5,
  },
];


// Create the task from the todoTasks object

const displayTasks = () => {
  toDoTasks.forEach((list) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div class="listLP">
        <input type="checkbox" name="" id="">
        <p class="task-to-be-done">${list.description}</p>
        </div>

        <div class="trash"><i class="fa-solid fa-trash-can"></i></div>
        
        `;
    TaskListBlock.appendChild(listItem);
  });
};

// Create the task from the todoTasks object
displayTasks();