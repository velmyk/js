function getCustomersList(obj) {
    let result = [];

    for (let customer in obj) {
        result.push(obj[customer])
    }

    for (let i = 0; i < result.length; i++) {
        result[i].id = Object.keys(customers)[i];
    }

    result.sort((a, b) => a.age - b.age)

    return result;
}



// const customers = {
//     'customers-id-1': {
//         name:'William',
//         age: 54
//     },
//     'customers-id-2': {
//         name: 'Tom',
//         age: 17
//     },
// }

// getCustomersList(customers);
// // console.log(Object.keys(customers));