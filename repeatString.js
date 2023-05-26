/* repeatString
Given a string, duplicate in n times and return a single string
Ex: repeatString("B", 5) returns "BBBBB"
Ex: repeatString("Abc", 3) returns "AbcAbcAbc" */

var repeatString = function(s, n) {
    var result = '';
    while (n--) {
        result += s;
    };
    return result;
}

// TESTS
repeatString("B",5) // repeats a single-char string
repeatString("hello",2) // repeats a multi-char string
repeatString("Abc",3) // repeats a multi-char, multi-case string
