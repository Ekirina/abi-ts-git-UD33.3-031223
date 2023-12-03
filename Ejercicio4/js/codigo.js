const word = 'Hola';
const array = Array.from(word);
const wordReverse = array.reverse();

const invertida = wordReverse.join('');

console.log('Palabra normal:', word);
console.log('Palabra invertida:', invertida);