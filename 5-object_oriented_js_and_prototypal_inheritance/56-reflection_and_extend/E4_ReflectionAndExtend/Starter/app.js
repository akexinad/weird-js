var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// Without the if statement, you will get all properties pertaining to John and the person prototype. The hasOwnProperty() methods ensures you only return the props that are on the john object.
for (let prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(`${ prop }: ${ john[prop] }`);
    }
}

const jane = {
    address: '123 fake st',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

const jim = {
    getFirstName: function() {
        return this.firstname;
    }
}

_.extend(john, jane, jim);

console.log(john);
