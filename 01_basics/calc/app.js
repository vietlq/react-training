var readline = require('readline-sync');
var calc = require('./calc');

var name = readline.question("- What's your name?\n- ");

console.log("My name is: " + name);

var num = readline.question("- Enter the number to be squared\n- ");

num = parseInt(num);
console.log("- Your number is " + num + " and its square is " + (calc.square(num)));
