const button = document.getElementById('btn');
const input = document.getElementById('input');
const todoapp = document.querySelector('.todo-app');

button.addEventListener('click', () => {
  let inputvalue = input.value;

  if (inputvalue === "") {
    alert('Enter something');
    return;
  }

  // Create a div to hold the task
  const resultdiv = document.createElement('div');
  resultdiv.className = "resultdiv";

  // Create the task text
  const h4 = document.createElement('h4');
  h4.innerText = inputvalue;

  // Create delete button
  const delbtn = document.createElement('button');
  delbtn.innerText = "❌";
  delbtn.className = 'delete-btn';

  // Add event to delete the task
  delbtn.addEventListener('click', () => {
    resultdiv.remove();
  });

  // Append h4 and button to the div
  resultdiv.appendChild(h4);
  resultdiv.appendChild(delbtn);

  // Add the task to the todo-app container
  todoapp.appendChild(resultdiv);

  // Clear input
  input.value = "";
});



