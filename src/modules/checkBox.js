window.handleCheckbox = (id) => {
  const tasks = JSON.parse(localStorage.getItem('TasksInfo')) || [];
  for (let i = 0; i < tasks.length; i += 1) {
    if (id === tasks[i].id) {
      tasks[i].completed = true;
    }
  }
  localStorage.setItem('TasksInfo', JSON.stringify(tasks));
};

export default window.handleCheckbox;