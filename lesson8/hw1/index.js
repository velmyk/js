function pickProps(obj, arr) {
    let newObj = {};

    arr.forEach(element => {
        if (obj[element]) {
            newObj[element] = element;
        }
    });
}