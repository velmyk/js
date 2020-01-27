function pickProps(obj, arr) {
    let newObj = {};

    arr.forEach(element => {
        if (element in obj) {
            newObj[element] = element;
        }
    });
    return newObj;
}