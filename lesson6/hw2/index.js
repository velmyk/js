function reverseArray(arr) {

    let newArr = [];
    if (Array.isArray(arr)) {
        for (let item of arr) {
            newArr.unshift(item);
        }
        return newArr;
    } else {
        return null;
    }
}