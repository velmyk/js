function getSum(from, to) {
    let result = 0;
    for (let i = from; i <= to; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}