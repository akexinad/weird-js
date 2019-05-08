var person = {};
// THE JS Engine assumes you are creating an object
// THIS IS AN OBJECT LITERAL

var person = {
  firstname: 'Roberto',
  lastname: 'Benigni',
  address: {
    street: '123 Fake St',
    city: 'Florence',
    region: 'Tuscany'
  }
}

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(person);
