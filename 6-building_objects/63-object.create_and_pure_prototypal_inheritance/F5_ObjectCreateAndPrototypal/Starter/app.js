const person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return `Hi ${ this.firstname }.`;
    }
}

// THIS IS PURE PROTOTYPAL INHERITANCE. MUCH SIMPLER. ALL NEW BROWSERS SUPPORT THIS

const john = Object.create(person);
john.firstname = 'federico';
john.lastname = 'fellini';

console.log(john);

// You can use polyfill to make this work on older browsers and engine.

if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation' + 'only accepts the first parameter.');
        }
        function F() {};
        F.prototype = o;
        return new F();
    };
}
