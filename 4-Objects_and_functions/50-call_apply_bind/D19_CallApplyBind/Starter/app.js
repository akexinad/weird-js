const person = {
    firstname: 'federico',
    lastname: 'fellini',
    getFullName: function() {

        const fullname = `${ this.firstname } ${ this.lastname }`;

        return `This is ${ fullname }`;
    },
};

var logName = function(lang1, lang2) {

    console.log(this.getFullName());
    console.log(`Arguments: ${ lang1 } ${ lang2 }`);
    console.log('-------------------');

};

// Using .bind() will create a copy of the function for you.
const logNameBinded = logName.bind(person);
logNameBinded();

// Using .call() will bind AND execute your function. It doesn't make a copy like .bind().
// You can also pass paramters to it.
logName.call(person, 'en', 'es');

// .apply() is the same as .call(), only that you pass an array of arguments.
// good for mathematical situations.
logName.apply(person, ['en', 'es']);


// ---------------------- //
// REAL LIFE APPLICATIONS //
// ---------------------- //


// ------------------ //
// FUNCTION BORROWING //
// ------------------ //

var person2 = {
    firstname: 'roberto',
    lastname: 'benigni'
}

// You can create a secon object with identical keys and .call() the second object into the function found in the first function object.
const functionBorrowing = person.getFullName.call(person2);
console.log(functionBorrowing);

console.clear();

// ----------------- //
// FUNCTION CURRYING //
// ----------------- //

// NOTE: See notes for def.n of currying.

function multiply(a, b) {
    return a * b;
}

// in this example you are binding the function to 'this' (like a default binding???) and setting 'a' permananetly to 2.
const multipleByTwo = multiply.bind(this, 2);

console.log(multipleByTwo(4)); // => 2 (permanent parameter) * 4 = 8;
