function concatProps(obj) {
    let array = [];

    for (elem in obj) {
        array.push(obj[elem]);
    }
    return array;
}

// let obj1 = {
//     // 'lalaa': 2,
//     // 'asdsadsa': 'assdad',
//     // 3: 4
// }

// // console.log(concatProps(obj1));