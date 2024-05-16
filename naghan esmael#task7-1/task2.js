function checkVowelOrConsonant(char) {
    char = char.toLowerCase();

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log("vowel");
    } else {
        console.log("Consonant");
    }
}

let userInput = prompt("Enter a character:");

if (userInput.length === 1) {
    checkVowelOrConsonant(userInput);
} else {
    console.log("Please enter only one character.");
}
