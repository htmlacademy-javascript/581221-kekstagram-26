/* eslint-disable no-console */
const getRandomNuber = (min, max) => {
  if (min < 0 || max < 0) {
    return console.log('Некорректные значения');
  } else {
    const minNumber = (min < max) ? min : max;
    const maxNumber = (max > min) ? max : min;
    return Math.floor(Math.random() * (maxNumber - minNumber + (1 * Math.random())) + minNumber);
  }
};

const checkStringLength = (str, maxLength) => {
  if (typeof str === 'string' || typeof maxLegth === 'number') {
    return !(str.length > maxLength);
  } else {
    return console.log('Некорректные значения');
  }
};

console.log(checkStringLength('asdfaskdfjlasdfkj', 2));
console.log(checkStringLength('asdfaskdfjlasdfkj', 20));
console.log(checkStringLength(534523, true));

console.log(getRandomNuber(1, 10));
console.log(getRandomNuber(10, 1));
console.log(getRandomNuber(5, 5));
console.log(getRandomNuber(-10, 1));
