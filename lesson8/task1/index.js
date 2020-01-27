function transformToObject(arr) {
    const obj = {};
    for (elem of arr) {
        obj[elem] = [elem];
    }
    return obj;
}