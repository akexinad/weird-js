const person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return `${ this.firstname } ${ this.lastname }`;
    }
}

const fellini = {
    firstname: 'Federico',
    lastname: 'Fellini',
}

// DO NOT DO THIS. FOR DEMO PURPOSES ONLY. Doing this causes performance issues and can slow your application dramatically.

fellini.__proto__ = person;

console.log(fellini.getFullName());

const jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName());
