function calculateTotal(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total;
}

function calculateAverage(total, numSubjects) {
    return total / numSubjects;
}

function calculatePercentage(total, totalMarks) {
    return (total / totalMarks) * 100;
}

let marks = [];
for (let i = 0; i < 5; i++) {
    marks.push(parseInt(prompt("Enter marks for subject " + (i + 1) + ":")));
}

let totalMarks = calculateTotal(marks);

let averageMarks = calculateAverage(totalMarks, marks.length);

let percentage = calculatePercentage(totalMarks, marks.length * 100);

console.log("Total marks =", totalMarks);
console.log("Average Marks =", averageMarks);
console.log("Percentage =", percentage);
