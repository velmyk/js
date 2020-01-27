function getArrayBounds(arr) {
    if (Array.isArray(arr)) {
        return [arr.length, arr.unshift(), arr.pop(),]
    } else {
        return null;
    }
}