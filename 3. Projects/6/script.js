const input = document.getElementById("writeTask");
const addTask = document.getElementById("addTask");
const container = document.getElementById("container");
const temp = document.getElementById("temp");

addTask.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create task container
  const newDiv = document.createElement('div');
  newDiv.className = "newTask";

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'check';

  // Create label
  const label = document.createElement('label');
  label.textContent = taskText;
  label.style.fontSize = "18px";

  // Create a remove task button
  const button = document.createElement('button');
  button.id = "removeButton";
  button.innerHTML = "Remove";

  // Handle strike-through on check
  checkbox.addEventListener('change', () => {
    label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    label.style.color = checkbox.checked ? '#a18888ff' : 'black';
  });

  // Add to container
  newDiv.appendChild(checkbox);
  newDiv.appendChild(label);
  newDiv.appendChild(button)
  container.appendChild(newDiv);

  // Remove "No tasks added" message
  temp.style.display = 'none';

  // Handle remove button
  button.addEventListener('click',()=>{
    container.removeChild(newDiv);
    if (container.children.length === 0) {
    temp.style.display = 'block';
    temp.textContent = 'No tasks added';
  }
  })

  // Clear input box
  input.value = '';
});

