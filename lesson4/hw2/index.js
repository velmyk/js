let m = 4;
let n = 30;

let result = 0;

// function isInteger(num) {
//     return (num ^ 0) === num;
// }

for (let i = m; i <= n; i++) {
    if ((i % 2 == 0) && (i % 4 != 0)) {
        result += i;
    } else if (i % 3 == 0) {
        result -= i;
    } else if (i % 4 == 0) {
        result *= i;
    } else if (i % 5 == 0) {
        console.log(i);
    }
}
console.log(result);


// for (let i = m; i <= n; i++) {

//     if (isInteger(i / 5)) {
//         console.log(i);
//        continue;
//     } else if (isInteger(i / 2) && !isInteger(i / 4)) {
//         result += i;
//     } else if (isInteger(i / 3)) {
//         result -= i;
//     } else if (isInteger(i / 4)) {
//         result *= i;
//     }
// }
// console.log(result);