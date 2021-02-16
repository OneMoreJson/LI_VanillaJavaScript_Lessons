// // FOR LOOP

// for(let i = 0; i <= 10; i++){
//   if( i === 2 ){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5 ){
//     console.log('stop the loop');
//     break;
//   }

//   console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while(i <= 10){
//   console.log(`number ${i}`);
//   i++;
// }

// DO WHILE


// ARRAY LOOPING NON STANDARD

const cars = ['Ford', 'Chevy', 'Honda','Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(`I like ${cars[i]}`);
// }

// FOREACH
// cars.forEach(function(car){
//   console.log(car);
// });

// cars.forEach(function(car, index, array){
//   console.log(`${car} : ${index}`);
//   console.log(array)
// });




// Map
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(users){
//   return users.id;
// }); 

// console.log(ids)

// const names = users.map(function(users){
//   return users.name;
// }); 

// console.log(names)

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}