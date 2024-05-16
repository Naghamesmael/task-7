function calculatePercentage(totalMarks, totalPossibleMarks) {
    return (totalMarks / totalPossibleMarks) * 100;
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return 'Grade A';
    } else if (percentage >= 80) {
        return 'Grade B';
    } else if (percentage >= 70) {
        return 'Grade C';
    } else if (percentage >= 60) {
        return 'Grade D';
    } else if (percentage >= 40) {
        return 'Grade E';
    } else {
        return 'Grade F';
    }
}

let physics = parseInt(prompt("Enter marks for Physics:"));
let chemistry = parseInt(prompt("Enter marks for Chemistry:"));
let biology = parseInt(prompt("Enter marks for Biology:"));
let mathematics = parseInt(prompt("Enter marks for Mathematics:"));
let computer = parseInt(prompt("Enter marks for Computer:"));

let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = calculatePercentage(totalMarks, 500);

let grade = calculateGrade(percentage);

console.log("Percentage =", percentage.toFixed(2) + "%");
console.log("Grade =", grade);
