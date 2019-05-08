// FUNCTION STATEMENT
// This function just does work.
function greet() {
  console.log('hi'); // CODE PROPERTY
}

greet();


// anonymousGreet();
// You cannot hoise the anonymous function because it is stored in a variable and the variable is initially stored as undefined.

// FUNCTION EXPRESSION and an example of an anonymous function unlike the function above.
// This function returns a value in the variable anonymousGreet.
// This function gets PUT INTO MEMORY.
var anonymousGreet = function() {
  console.log('hi');
}

function log(a) {
  // console.log(a);
  a();
}

// log('hello');

// log({
//   greeting: "hi"
// });

// THIS IS THE BASICS OF FUNCTIONAL PROGRAMMING
log(function () {
  console.log('hi');
});
