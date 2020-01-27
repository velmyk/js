const flatArray = (array) => array
    .reduce(function (acc, elem) {
        return acc.concat(elem)
    }, [])
