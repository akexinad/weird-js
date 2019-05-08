var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
// is the same as ...
console.log(person["firstname"]);

person.address = new Object();
person.address.street = "123 Fake St";
person.address.city = "Rome";
person.address.region = "Lazio";
