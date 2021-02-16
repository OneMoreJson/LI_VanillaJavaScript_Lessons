const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear Original Input
taskInput.value = ``;

// form.addEventListener('submit', runEvent);

// Key Press
// taskInput.addEventListener('keypress', runEvent);

// // Key Up
// taskInput.addEventListener('keyup', runEvent);

// Key Down
// taskInput.addEventListener('keydown', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Acutal Input Event
// taskInput.addEventListener('input', runEvent);




function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  heading.innerText = e.target.value;

  // Get Input
  // console.log(taskInput.value);

  // e.preventDefault();
}