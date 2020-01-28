const getRandomNumbers = (length, min, max) => {

    let result = [];

    if (Number.isInteger(max - min) && min < max) {
        for (let i = 0; i < length; i++) {
            result.push(Math.floor(Math.random() * (max - min) + min));
        }
        return result;
    } else {
        return null;
    }
}

// console.log(getRandomNumbers(5, 7, 10))