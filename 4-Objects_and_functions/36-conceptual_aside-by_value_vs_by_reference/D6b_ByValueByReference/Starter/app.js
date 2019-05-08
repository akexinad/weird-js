// BY VALUE
// Primitives

var a = 3;
var b;

b = a;
a = 2;

console.log(a); // 2
console.log(b); // 3

// BY REFERENCE (all objects (inc FUNCTIONS))
var c = { greeting: "hi" };
var d;

d = c;
c.greeting = 'hello'; // MUTATE

console.log(c);
console.log(d);

// THE JS ENGINE IS DIRECTING THE CHANGE TO THE SAME POINT IN MEMORY.

function changeGreeting(obj) {
  obj.greeting = 'Hola';
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: "Ciao" };

console.log(c);
console.log(d);
