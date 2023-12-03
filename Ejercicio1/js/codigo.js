const LETTERS_ARR = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function arrayLength() {
    return LETTERS_ARR.length
}

function randomArrayElement() {
    const randomIndex = Math.floor(Math.random() * LETTERS_ARR.length);
    const elementRandom = LETTERS_ARR[randomIndex];
    return elementRandom
}
console.log(randomArrayElement());
console.log(arrayLength());
