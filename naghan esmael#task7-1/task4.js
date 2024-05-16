function printEvenNumbers(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            process.stdout.write(i.toString());
            if (i !== num && i !== num - 1) {
                process.stdout.write(" ");
            }
        }
    }
}

let userInput = parseInt(prompt("Enter a number:"));

if (!isNaN(userInput) && userInput > 0) {
    printEvenNumbers(userInput);
    console.log();
} else {
    console.log("Invalid input. Please enter a positive integer.");
}
