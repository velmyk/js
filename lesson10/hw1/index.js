const getTotalPrice = arr =>
    "$" + Math.ceil(arr.reduce((acc, item) => acc + item, 0) * 100) / 100


