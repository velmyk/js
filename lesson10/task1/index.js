const getFiniteNumbers = arr =>
    arr.filter(item => Number.isFinite(item));

const getFiniteNumbersV2 = arr =>
    arr.filter(item => isFinite(item));

const getNaN = arr =>
    arr.filter(item => Number.isNaN(item));

const getNaNV2 = arr =>
    arr.filter(item => isNaN(item));

const getIntegers = arr =>
    arr.filter(item => Number.isInteger(item));

// let arr1 = [2, 3, 5, Infinity, 5];
// console.log(getFiniteNumbers(arr1))