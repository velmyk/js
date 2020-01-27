
function sortAsc(array) {
    let newArray = [...array];
    let n = newArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (newArray[j + 1] < newArray[j]) {
                let t = newArray[j + 1];
                newArray[j + 1] = newArray[j];
                newArray[j] = t;
            }
        }
    }
    return array;
}


function sortDesc(array) {
    let newArray = [...array];
    let n = newArray.length;
    for (let i = n - 1; i > 0; i--) {
        for (let j = n - 1 - i; j > 0; j--) {
            if (newArray[j - 1] < newArray[j]) {
                let t = newArray[j - 1];
                newArray[j - 1] = newArray[j];
                newArray[j] = t;
            }
        }
    }
    return array;
}