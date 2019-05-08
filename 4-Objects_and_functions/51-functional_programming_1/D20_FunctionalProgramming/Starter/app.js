function mapForEach(arr, fn) {

    let newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(
             fn(arr[i]) // Here we begin to abstract smaller moving parts from within the for loop and pass each iteration into a function.
        );
    };

    return newArr;
}

const arr1 = [1, 2, 3];
console.log(arr1);

const arr2 = mapForEach(arr1, (item) => {
    return item * 2;
})

console.log(arr2);

console.clear();

const arr3 = mapForEach(arr1, (item) => {
    return item > 2;
})

const checkForLimit = function(limiter, item) {
    return item > limiter;
};

const arr4 = mapForEach(arr1, checkForLimit.bind(this, 1));

console.log(arr4);


const checkForLimit2 = checkForLimit.bind(this, 3);

const arr5 = mapForEach(arr1, checkForLimit2);

console.log(arr5);

// ANSWER

const checkForLimit3 = function(limiter) {
    return checkForLimit.bind(this, limiter);
};

const arr6 = mapForEach(arr1, checkForLimit3(3));

console.log(arr6);

// OR

const checkForLimit4 = function(limiter) {
    return function(limiter, item) {
        return item > limiter
    }.bind(this, limiter)
};

const arr7 = mapForEach(arr1, checkForLimit4(1));

console.log(arr7);
