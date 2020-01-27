function concatProps(obj) {
    let array = [];

    for (elem in obj) {
        array.push(obj[elem])
    }
    return array;
}
