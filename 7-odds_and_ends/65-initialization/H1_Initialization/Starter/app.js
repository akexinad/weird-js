var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 main st',
            '123 fake st'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '222 main st',
            '333 fake st'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]

console.log(people);
