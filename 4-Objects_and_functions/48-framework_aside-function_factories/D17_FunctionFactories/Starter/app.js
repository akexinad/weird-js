// A FUNCTION FACTORIES ARE JUST FUNCTIONS THAT MAKE THINGS FOR ME.

function makeGreeting(language) {

    return function(firstname, lastname) {
        if (language === 'en') {
            console.log(`Hello ${ firstname } ${ lastname }`);
        }

        if (language === 'es') {
            console.log(`Hola ${ firstname } ${ lastname }`);
        }
    }
}

// ONE CLOSURE
// Here makeGreeting('en') creates an execution context, returns a function, pops off and leaves behind 'en' in memory for greetEnglish('John', 'Doe') to pick up and reuse.
var greetEnglish = makeGreeting('en');
greetEnglish('John', 'Doe');

// ANOTHER CLOSURE
// Same goes for makeGreeting function over here;
var greetSpanish = makeGreeting('es');
greetSpanish('Juan', 'Doe');

// SEE SCREENSHOT FOR DIAGRAM
