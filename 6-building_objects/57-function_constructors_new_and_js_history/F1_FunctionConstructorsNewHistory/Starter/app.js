// This is an example of using a function to construct an object.
// AKA
// A FUNCTION CONSTRUCTOR

function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}

// new is actually an OPERATOR, therefore it is a function, which creates an empty object.
const john = new Person('john', 'doe');
console.log(john);

const fellini = new Person('federico', 'fellini');
console.log(fellini);
// Function constructors are still functions;
