// EVENT BUBBLING 

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('.card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('.col');
// });

// EVENT DELIGATOION 

// const deleteItem = document.querySelector('.delete-item');

// deleteItem.addEventListener('click', deleteItemFunc);

document.body.addEventListener('click', deleteItem);

// FIRST STEP
// function deleteItem(e){
//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete item');
//   }
// }

// SECOND STEP ... Actually removing
function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}
