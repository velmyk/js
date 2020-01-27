function removeDuplicates(arr) {
    let newArr = [...arr];

    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] == newArr[j]) {
                newArr.splice(j, 1);
            }
        }
    }
    return newArr;
}
