const getTotalPrice = arr =>
    "$" + Math.floor(arr.reduce((acc, item) => acc + item, 0) * 100) / 100


