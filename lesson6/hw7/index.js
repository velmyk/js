
function checker(arr) {
    let newArray = [...arr];
    let n = newArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (newArray[j + 1] < newArray[j]) {
                let t = newArray[j + 1];
                newArray[j + 1] = newArray[j];
                newArray[j] = t;
            }
        }
    }
    return newArray[0] + newArray[newArray.length - 1] > 1000 ? true : false;
}
