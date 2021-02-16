// Create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// Add ID
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text nod and append ... w/o var
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Append link into li
li.appendChild(link);

// Add Link
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);





console.log(li);