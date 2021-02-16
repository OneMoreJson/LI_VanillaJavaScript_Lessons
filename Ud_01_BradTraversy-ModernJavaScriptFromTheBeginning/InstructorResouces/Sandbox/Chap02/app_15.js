// WINDOw METHODS / OBJECTS / PROPERTIES

// console.log(123);

// ALERT
// window.alert('Hello World');


// PROMPT
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('Yes')
// } else {
//   console.log('No')
// }

// PROPERTIES
let val;

// Outer Height and Width
val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight; 
val = window.innerWidth;

// Scroll Points
val = window.scrollY;
val = window.scrollX;

// Location OBJ
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History
// window.history.go(-1);
// val = window.history.length;

// Navigator OBJ ... The Browser
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
val = window.navigator.keyboard;
// val = window.navigator.geolocation;


console.log(val);