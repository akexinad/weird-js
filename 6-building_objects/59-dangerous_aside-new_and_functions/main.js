// CONVENTION: function constructor begin with a capital
function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}

// ALL FUNCTIONS GET A .PROTOTYPE PROPERTY.
Person.prototype.getFullName = function() {
    return `${ this.firstname } ${ this.lastname }`;
}

// The JS engine does not know that you want this to be a new instance of the constructor, so if you forget the 'new' tag, this will return undefined.
var john = Person('John', 'Doe');
console.log(john);

var jane = Person('Jane', 'Doe');
console.log(jane);

// NOTE: You can add methods to the prototype later on aswell and your new functions will be able to find these new methods down the prototype chain in the same way.
Person.prototype.getFormalName = function() {
    return `${ this.lastname }, ${ this.firstname }.`
};

console.log(john.getFormalName());
