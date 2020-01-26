function findDivCount(a, b, n) {
    result = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === n) {
            result++;
        }
        return result;
    }
}