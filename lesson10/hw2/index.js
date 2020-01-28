const getRandomNumbers = (length, start, finish) => {

    let result = [];

    if (start >= finish) {
        for (let i = 0; i < length; i++) {
            result.push(Math.random() * (finish - start) + start);
        }
        return result;
    } else {
        return null;
    }
}