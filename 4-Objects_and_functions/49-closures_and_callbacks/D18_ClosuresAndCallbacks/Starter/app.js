function sayHiLater() {

    var greeting = "Hi";

    setTimeout( function() {
        console.log(greeting);
    }, 2000)
}

sayHiLater();


function tellMeWhenDone(callback) {

    var a = 'doing some work';
    var b = 'doing more work';

    callback();
}

tellMeWhenDone(function() {

    alert('Finished working.');
})
