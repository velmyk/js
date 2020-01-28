 "use strict";

 const getCustomersList = obj =>
    Object.entries(obj)
    .map(item => ({id: item[0], ...obj[item[0]]}))
    .sort((a, b) => a.age - b.age);

    
// function getCustomersList(obj) {
//     let result = [];
//     let newObj = {...obj};
//     for (let customer in newObj) {
//         result.push(newObj[customer])
//     }

//     let tempArr = Object.keys(newObj);
//     for (let i = 0; i < result.length; i++) {
//         result[i].id = tempArr[i];
//     }

//     result.sort((a, b) => a.age - b.age)
//     return result;
// }


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

// 1  obj => key



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
