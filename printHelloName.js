// printHelloName
// Create a string to say hello in the format: "Hello, {{ name }}!
// Ex. printHelloName("Aaron"), returns "Hello, Aaron!"

var printHelloName = function(firstName) {
    return `Hello, ${firstName}!`
  }

// TESTS
printHelloName('Aaron');
printHelloName('');
