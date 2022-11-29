const readline = require("readline");
const product = require("./Product/index");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Product Rule: ");
rl.question("Enter number: ", (n) => {
	console.log("Results:", product(n));
	rl.close();
});
