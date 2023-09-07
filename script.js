// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var a1 = "I am a ";
var a2 = "Kalvian";
var a3 = a1 +" "+ a2;
console.log(a3);


// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var string1 ="If you fail, never give up because FAIL means \"First Attempt In Learning\""
console.log(string1);

// Challenge 3: Store a string in a variable and display the length of the string.
var text="Hello world."
var length= text.length;
console.log(length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
var String2 = "How you doing";
var upperCaseString = String2.toUpperCase();
console.log(upperCaseString);

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var String3 = 'I love programming';
var mString = String3.replace('programming' , ' c++ programming');
console.log(mString)


// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var String4 = "I love to play outdoor gomes.";
console.log(String4.repeat(3))

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var String5 = "I am  a Kalvian";
var mArray = String5.split(" ");
console.log(mArray);


// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var String7 = 'When life gives you lemons make lemonade';
var includesLemon = String7.includes('lemon');
console.log(includesLemon);

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var String8 = 'You must be the change you wish to see in the world.';
var change = String8.slice(16,22);
console.log(change);
var World = String8.substring(46,51);
console.log(World);

