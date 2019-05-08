// ADDING FEATURES TO ALL STRINGS IN JS

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
};

console.log('John'.isLengthGreaterThan(3));

// THIS WILL GIVE AN ERROR AS THE ENGINE WILL NOT CONVERT THE NUMBER TO AN OBJECT
Number.prototype.isPositive = function() {
    return this > 0;
};
