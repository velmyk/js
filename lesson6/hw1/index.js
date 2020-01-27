function squareArray(arr) {
    let newArr = [];
    if (Array.isArray(arr)) {
        for (let item of arr) {
            newArr.push(item * item);
        } return newArr;
    } else {
        return null;
    }
}