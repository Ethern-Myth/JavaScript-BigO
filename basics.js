const readline = require("readline");
const Linear = require("./Basics/Linear");
const Quadratic = require("./Basics/Quadratic");
const Cubic = require("./Basics/Cubic");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter number: ", (n) => {
	console.log("Linear O(n) algorithm:");
	Linear(n);
	console.log("Quadratic O(n²) algorithm:");
	console.log();
	Quadratic(n);
	console.log();
	console.log("Cubic O(n³) algorithm:");
	Cubic(n);
	rl.close();
});
