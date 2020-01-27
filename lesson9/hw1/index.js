"use strict";

function getCustomersList(obj) {
    let result = [];

    for (let customer in obj) {
        result.push(obj[customer])
    }

    let tempArr = Object.keys(obj);
    for (let i = 0; i < result.length; i++) {
        result[i].id = tempArr[i];
    }

    result.sort((a, b) => a.age - b.age)
    return result;
}

// let customersObj = {
//     'c-id-1': {
//         name: 'William',
//         age: 54
//     },
//     'c-id-2': {
//         name: 'Adam',
//         age: 18
//     },
//     'c-id-3': {
//         name: 'John',
//         age: 17
//     },
// };




// const customers = {
//     'customers-id-1': {
//         name:'William',
//         age: 54
//     },
//     'customers-id-2': {
//         name: 'Tom',
//         age: 17
//     },
//     'customers-id-3': {
//         name: 'Dima',
//         age: 18
//     },
// }

// console.log(getCustomersList(customersObj));
