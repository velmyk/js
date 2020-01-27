function getSum(arr) {
    let sum = 0;

    if (Array.isArray(arr)) {
        for (let item of arr) {
            sum += item;
        }
        return sum;
    } else {
        return null;
    }
}