function findDivCount(a, b, n) {
    result = 0;
    for (let i = a; i <= b; i++) {
        if (i % n  === 0) {
            result++;
        }
    }
    return result;
}