const squareArray = (arr) => {
    if (Array.isArray(arr)) {
        return arr.map(item => item * item);
    } else {
        return null;
    }
}