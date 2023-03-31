// Define an array of names
var names = ["John", "Jane", "Jim", "Jack", "Jill", "Janet"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {

  // Get the current name from the array
  var name = names[i];

  // Check if the first letter of the name is J or j
  if (name.charAt(0) === 'J' || name.charAt(0) === 'j') {
    // If it is, print Goodbye JSomeName to the console
    console.log("Goodbye " + name);
  } else {
    // If it isn't, print Hello SomeName to the console
    console.log("Hello " + name);
  }
}
