const button = document.getElementById('btn');
const input = document.getElementById('input');
const todoapp = document.querySelector('.todo-app');

button.addEventListener('click', () => {
  let inputvalue = input.value;

  if (inputvalue === "") {
    alert('Enter something');
    return;
  }


  const resultdiv = document.createElement('div');
  resultdiv.className = "resultdiv";

 
  const h4 = document.createElement('h4');
  h4.innerText = inputvalue;

  
  const delbtn = document.createElement('button');
  delbtn.innerText = "❌";
  delbtn.className = 'delete-btn';

  
  delbtn.addEventListener('click', () => {
    resultdiv.remove();
  });

  
  resultdiv.appendChild(h4);
  resultdiv.appendChild(delbtn);

  todoapp.appendChild(resultdiv);


  input.value = "";
});



