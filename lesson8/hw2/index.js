function getAdults(obj) {
    let newObj = {};

    for (key in obj) {
        if (obj[key] >= 18) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}
