function getPerson() {


    return
    {
        firstname: 'Tony'
    }

    // this will return undefined as the parser automatically injects a ; after the return. you have to put the { on the same line as the return statement.

}

console.log(getPerson());
