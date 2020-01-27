function uniqueCount(array) {
    let tempArr = [...array];
    let quantiy = 0;
    let temp = 0;

    for (let i = 0; i < tempArr.length; i++) {
        for (let j = i + 1; j < tempArr.length; j++) {
            if (tempArr[i] === tempArr[j]) {
                temp++;
                tempArr.splice(j, 1);
            }
        }
        if (temp === 0 || temp >= 1) {
            quantiy++;
            temp = 0;
        }
    }
    return quantiy;
}


