// IIFE
(function(global, name) {

    var greeting = 'Hello';
    // Here we crash against the greet.js file by passing in a global variable, in the case of the browser the global variable is the WINDOW
    // SO here we are calling window.greeting which will over write the greet.greeting in the greet.js files.
    // This pattern makes it INTENTIONAL AND SAFE
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(window, 'John')); // IIFE

console.log(greeting);
