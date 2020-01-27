function concatProps(obj) {
    let array = [];

    for (elem in obj) {
        array.concat(obj.elem)
    }
    return array;
}
