let m = 1;
let n = 10;
let result = 1;

for (let i = m; i <= n; i++ ) {
    if (i % 2 === 1) {
        result *= i
        console.log("Result: " + result);
    }

}