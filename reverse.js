const greetings = 'Hellow World';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

const loopReverse = reverseString(greetings);
console.log(loopReverse);