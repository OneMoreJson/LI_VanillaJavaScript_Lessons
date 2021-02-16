// OBJ LITERALS

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  }, 
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;
val = person;

// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address.city;
val = person.getBirthYear();

const people = [
  {name: 'John', age:30},
  {name: 'Mike', age:23},
  {name: 'Nancy', age:55},
];

console.log(val);

for(let i = 0; i < people.length; i++){
  console.log(people[i].name)
};













