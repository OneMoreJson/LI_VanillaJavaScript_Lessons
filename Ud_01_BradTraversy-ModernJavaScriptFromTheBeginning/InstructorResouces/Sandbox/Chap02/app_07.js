const firstName = 'Jason';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// without template string (es5)
html = '<ul><li>Name: ' + firstName +' </li><li>'+ age + '</li><li>' + job +'</li><li>' + city + '</li></ul>';

html = '<ul>' + 
        '<li>' + firstName + '</li>' + 
        '<li>' + age + '</li>' + 
        '<li>' + job + '</li>' + 
        '<li>' + city + '</li>' + 
        '</ul>';


// with template strings (es6) or "template literals"

// for the function portion
function hello(){
  return 'hello';
}

html = `
  <ul>
    <li> ${firstName} </li>
    <li> ${age} </li>
    <li> ${job} </li>
    <li> ${city} </li>
    <li> ${2+4} </li>
    <li> ${hello()} </li>
    <li> ${age >  30 ? 'Over 30' : 'Under 30'} </li>
  </ul>
`;

document.body.innerHTML = html;

