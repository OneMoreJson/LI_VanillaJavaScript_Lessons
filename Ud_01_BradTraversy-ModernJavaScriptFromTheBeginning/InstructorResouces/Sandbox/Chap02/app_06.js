const firstName = 'William';
const lastName = 'Johnson';
const age = '44'
const str = 'Hello there my name is Jason'

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad'
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ' and my age is ' + age;

// Escaping 
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;  // this is a method not a function so no need for ()

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Treating the string as an Array
val = firstName[0];

// IndexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// Get Last Char
val = firstName.charAt(firstName.length -1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');

// const val2 = val[0];
// console.log(val2);

// replace()
val = str.replace('Jason', 'Jack');

// included()
val = str.includes('Jason'); // true but still has Jason


console.log(val);