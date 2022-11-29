const readline = require("readline");
const polynomial = require("./Polynomial/index");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Polynomial Rule: ");
rl.question("Enter number: ", (n) => {
	console.log("Results:", polynomial(n));
	rl.close();
});
