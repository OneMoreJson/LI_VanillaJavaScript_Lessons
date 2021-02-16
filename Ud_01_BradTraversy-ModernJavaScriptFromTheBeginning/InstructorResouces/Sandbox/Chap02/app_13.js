// FUNCTIONS DECLARATION

// // ES5
// function greet(firstName, lastName){
//   if(typeof firstName === 'undefined'){firstName = 'Jerry'}
//   if(typeof lastName === 'undefined'){lastName = 'Lewis'}
//   // console.log('hello')
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet('Steven', 'Smith'));

// // ES6
// function greet(firstName = 'First', lastName = 'Last'){
//   return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet('Smash', 'Cameron'));

// // FUNCTION EXPRESSIONS
// const square = function(x = 3){
//   return x*x;
// };

// console.log(square());

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE ran..');
// })()

// (function(name){
//   console.log(`Hello ${name}`);
// })('Jason')

// PROPERTY METHODS
const todo = {
  add: function(){
    console.log('Add to do...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete todo')
}


todo.add();
todo.edit(22);
todo.delete();

console.log(todo);