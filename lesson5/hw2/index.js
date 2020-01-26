function getPrimes(integerNum) {
    for (let i = 1; i <= integerNum; i++) {
        if (i % 1 === 0 && i % i === 0) {
            console.log(i);
        }
    }
}