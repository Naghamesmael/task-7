function findMaxAndMin(a, b, c) {
    let max = Math.max(a, b, c);
    
    let min = Math.min(a, b, c);
    
    console.log("max element =", max);
    console.log("min element =", min);
}

let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));
let num3 = parseInt(prompt("Enter third integer:"));

findMaxAndMin(num1, num2, num3);