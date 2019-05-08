// function logNewPerson() {
//     "use strict";
//
//     let person2;
//     persom2 = {};
//     console.log(persom2);
// }
//
// let person;
// persom = {};
// console.log(persom);
// logNewPerson();


const obj = {
    name: 'danny',
    age: 29,
    male: true,
    test: function() {
        console.log(this);
    }
}

function foo() {
    console.log(this);
}

foo();

const bar = foo.bind(obj);

bar();


function baz() {
    const obj = {
        name: 'danny',
        age: 29,
        male: true,
        test: function() {
            console.log(this);
        }
    }
}
