/* countVowels
Given a string, count the vowels and return that count

Ex: countVowels("adsbecdei") -> a, e, e, i -> 4
Ex: unbalancedArray("ffjnkjnj") -> no vowels -> 0 */

var countVowels = function(s) {
    var counter = 0;
    var vowels = "aeiou";
    for (l of s) {
        if (vowels.includes(l)) {
            counter++;
        };
    };
    return counter;
}

countVowels("adsbecdei") // should work with multiple vowels
countVowels("ffjnkjnj") // should work with no vowels

// Alternate method using regex

var countVowelsAlt = function(s) {
    return s.replace(/[^aeiou]/g, '').length;
};

countVowelsAlt("adsbecdei") // should work with multiple vowels
countVowelsAlt("ffjnkjnj") // should work with no vowels

// Alternate 2 method using regex

var countVowelsAlt2 = function(s) {
    return (s.match(/[aeiou]/ig)||[]).length;
};

countVowelsAlt2("adsbecdei") // should work with multiple vowels
countVowelsAlt2("ffjnkjnj") // should work with no vowels


// Alternate 3 method

var countVowelsAlt3 = function(s) {
    return s.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

countVowelsAlt3("adsbecdei") // should work with multiple vowels
countVowelsAlt3("ffjnkjnj") // should work with no vowels
