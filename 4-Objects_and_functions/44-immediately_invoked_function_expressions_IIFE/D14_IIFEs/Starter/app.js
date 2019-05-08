(function foo(firstArg, secondArg) {

    obj = {
        this: 'is great',
        i: 'mucking around'
    }

    console.log(`Hello ${ firstArg }, you're lucky number is ${ secondArg }, Don't you think this ${ obj.this }, of course we are ${ obj.i }!!!`);
}("Fellini", 44));
