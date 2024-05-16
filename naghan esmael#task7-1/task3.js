function printMultiplicationTable(num) {
    for (let i = 1; i <= 12; i++) {
        let product = num * i;
        process.stdout.write(product.toString());
        if (i !== 12) {
            process.stdout.write(" ");
        }
    }
}

let userInput = parseInt(prompt("Enter an integer:"));

if (!isNaN(userInput)) {
    printMultiplicationTable(userInput);
    console.log();
} else {
    console.log("Invalid input. Please enter a valid integer.");
}
