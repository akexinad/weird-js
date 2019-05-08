var objectLiteral = {
  name: "Benigni",
  age: 44,
  beautiful: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"name": "Benigni", "age": "44", "beautiful": true}');

console.log(jsonValue);
