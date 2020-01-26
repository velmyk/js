let m = 5;
let n = 15;

let result = 0;

function isInteger(num) {
    return (num ^ 0) === num;
  }

for (let i = 0; i <= n; i++) {
    if (isInteger(i / 2)  && isInteger(i / 4)){
        result += i;
    } else if (isInteger(i / 3)) {
        result -= i;
    } else if (isInteger(i / 4)) {
        result *= i;
    } else if (isInteger(i / 5)) {
        console.log(i);
    }
}

