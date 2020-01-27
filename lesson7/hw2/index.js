const reverseArray = arr => {
    if (Array.isArray(arr)) {
        let newArr = [...arr];
        return newArr.reverse();
    } else {
        return null;
    }
}