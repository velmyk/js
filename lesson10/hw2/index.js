const getRandomNumbers = (length, start, finish) => {

    let result = [];
    
    for (let i = 0; i <= length; i++) {
        result.push(Math.random() * (start - finish) + finish);
    }
    return result;
}