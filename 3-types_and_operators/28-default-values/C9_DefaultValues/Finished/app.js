function greet(name) {
    name = name || '<Your name here>'; // SETTING A DEFAULT VALUE
    console.log('Hello ' + name);
}

greet('Tony');
greet();

// HERE IT IS. During the CREATION PHASE of the execution context, the variable name passed into the function argument is given a value of undfined in memory.
