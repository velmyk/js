function getArrayBounds(arr) {
    if (Array.isArray(arr)) {
        return [arr.length, arr.shift(), arr.pop(),]
    } else {
        return null;
    }
}