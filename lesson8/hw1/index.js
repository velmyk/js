function pickProps(obj, arr) {
    let newObj = {};

    arr.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            newObj[element] = obj[element];
        }
    });
    return newObj;
}