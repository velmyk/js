let sum = 0;
const divider = 1234;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}

console.log(Math.floor(sum / divider) > (sum % divider));
