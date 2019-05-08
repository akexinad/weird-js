Array.prototype.myFeature = 'cool!';

const arr = ['fellini', 'benigni', 'jim'];

for (let prop in arr) {
    console.log(`${ prop }: ${ arr[prop] }`);
};


// NOTE: ARRAYS ARE OBJECTS. So in this example the for in statement will iterate through all array props, INCLUDING the the new prop added to the prototype myFeature.
// Thus its best to just use a normal for loop.
