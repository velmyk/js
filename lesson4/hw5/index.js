let sum = 0;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}

console.log(Math.floor(sum / 1234) > (sum % 1234));
