// getInitials
// Create a string to get initials from a first and last name.
// Must be uppercase and separated with a period (".")
// Ex. getInitials("Aaron Jack"), returns "A.J"

var getInitials = function(name) {
  return name.split(' ').map(i => i[0]).join('.').toUpperCase();
}

//TESTS
getInitials("Aaron Jack");
getInitials("Jan Frey");
getInitials("harry potter");

