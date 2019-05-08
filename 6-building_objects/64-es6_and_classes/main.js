// In other languages the word class is just a definition, in JS CLASS IS AN OBJECT.

class Person {
    constructor(firstname, lastname) {
        this.firsname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return `Hi ${ firstname }`;
    }
}

const john = new Person('John', 'Doe');


// HOW DO YOU SET THE PROTOTYPE? With the extend syntax

class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return `Yo ${ firstname }!`;
    }
}
