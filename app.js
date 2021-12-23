// Tarek Bari
// DOM Element
//Set local Storage Item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

//Set session storage item
sessionStorage.setItem('name', 'Bari');

//remove from storage
localStorage.removeItem('name');

//Get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name);
console.log(age);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('task', JSON.stringify(tasks));

  alert('Task Saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem(tasks));
tasks.forEach(function(task) {
  console.log(task);
});
