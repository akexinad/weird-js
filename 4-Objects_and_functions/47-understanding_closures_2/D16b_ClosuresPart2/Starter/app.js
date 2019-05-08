function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

// console.log(fs);

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// The reason these all log 3 is because when the for loop stops, it returns i with a value of 3. The execution stack of the for loop POPS OFF, BUT IN MEMORY, i REMAINS WITH A VALUE OF 3.

// So when you call fs[i](), an execution stack is created, it cant find the value of i within its lexcial environment, it goes down the scope chain and finds i with a value of 3!!!!!!!!!!!!

// HOLY SHIT CLOSURES!!!!!!!!!!!!

// The value i is what it is at the moment i execute the function.


// THIS IS HOW YOU PRESERVE THE VALUE OF i pre-ES2015! WITH AN IIFE!!!

function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

// console.log(fs2);

fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 3
