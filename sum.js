const readline = require("readline");
const sum = require("./Sum/index");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Sum Rule: ");
rl.question("Enter number: ", (n) => {
	console.log("Results:", sum(n));
	rl.close();
});
