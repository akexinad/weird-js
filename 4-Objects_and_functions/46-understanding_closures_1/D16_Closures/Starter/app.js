function greet(arg) {
    return function(name) {
        console.log(`${ arg } ${ name }`);
    }
}

var sayHi = greet('Hello');
sayHi('Tony');

// The reason the anon funtion within the greet() function still has access to the arg after the greet() function has finished executing and is popped off the execution stack is because THE ANON FUNCTION STILL HAS ACCESS TO THE GREET() FUNCTIONS MEMORY GIVEN THAT IT IS CALLED INSIDE THE GREET() FUNCTION

// So the execution context of greet() is gone, popped off. But the memory of what was inside that execution context is still there.

// The JS engine still ensures that the anon function can go DOWN THE SCOPE CHAIN and retrieve the arg that is still in memory and BELONGED to the greet() execution context.

// You can say the anon function CLOSES IN THE ACCESS IT HAS TO THE OUTER VARIABLES.
// THIS PHENOMENON IS CALLED THE CLOSURE.
// CLOSURES ARE A FEATURE OF THE JS LANGUAGE.
// A VERY POWERFUL FEATURE OF THE LANGUAGE.

// THE JS ENGINE CREATES THE CLOSURE FOR YOU.
