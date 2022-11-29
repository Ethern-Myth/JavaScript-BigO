const readline = require("readline");
const coefficient = require("./Cooefficient/index");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Coefficient Rule: ");
rl.question("Enter number: ", (n) => {
	console.log("Results:", coefficient(n));
	rl.close();
});
