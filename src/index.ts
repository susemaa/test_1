import { getRandomNumberArray, getCompressionRate } from './utils';

const random50 = getRandomNumberArray(50);
const rate50 = getCompressionRate(random50);
console.log('50 случайных чисел. Выигрыш в процентах: ', 100 - rate50 * 100);

const random100 = getRandomNumberArray(100);
const rate100 = getCompressionRate(random100);
console.log('100 случайных чисел. Выигрыш в процентах: ', 100 - rate100 * 100);

const random500 = getRandomNumberArray(500);
const rate500 = getCompressionRate(random500);
console.log('500 случайных чисел. Выигрыш в процентах: ', 100 - rate500 * 100);

const random1000 = getRandomNumberArray(1000);
const rate1000 = getCompressionRate(random1000);
console.log('1000 случайных чисел. Выигрыш в процентах: ', 100 - rate1000 * 100);

const every1: Array<number> = [];
for (let i = 1; i < 10; i += 1) {
  every1.push(i);
  every1.push(i);
  every1.push(i);
}
const rateEvery1 = getCompressionRate(every1);
console.log('Все числа из 1 цифры 3 раза. Выигрыш в процентах: ', 100 - rateEvery1 * 100);

const every2: Array<number> = [];
for (let i = 10; i < 100; i += 1) {
  every2.push(i);
  every2.push(i);
  every2.push(i);
}
const rateEvery2 = getCompressionRate(every2);
console.log('Все числа из 2 цифр 3 раза. Выигрыш в процентах: ', 100 - rateEvery2 * 100);

const every3: Array<number> = [];
for (let i = 100; i < 301; i += 1) {
  every3.push(i);
  every3.push(i);
  every3.push(i);
}
const rateEvery3 = getCompressionRate(every3);
console.log('Все числа из 3 цифр 3 раза. Выигрыш в процентах: ', 100 - rateEvery3 * 100);
