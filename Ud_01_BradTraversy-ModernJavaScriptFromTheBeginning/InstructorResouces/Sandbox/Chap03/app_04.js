let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// The map of all the numbers for nodes
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - comment
// 9 - Doc itself
// 10 - Doctype

// Get Children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello'
// children of children
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;   // Most Cases we use this

// Last Child
val = list.lastChild;
val = list.lastElementChild;   // Most Cases we use this

// Count Childe Elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);