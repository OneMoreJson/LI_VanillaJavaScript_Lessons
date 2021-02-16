// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World')

//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked');

  let val;

  val = e;

  // Element Target Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  
  // e.target.innerText = 'Hello';


  // Event Type
  val = e.type;

  // TimeStamp
  val = e.timeStamp;

  // Cord event relative to the window
  val = e.clientY;
  val = e.clientX;
  
  // Cord event relative to the window
  val = e.offSetY;
  val = e.offSetX;






  console.log(val)
}