function transformToObject(arr) {
    const obj = {};

    arr.forEach(elem => {
        obj[elem] = elem;
    });

    return obj;
}
