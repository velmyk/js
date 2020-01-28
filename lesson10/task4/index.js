const getMaxAbsoluteNumber = arr => {

    if (Array.isArray(arr) && (arr.length != 0)) {
        return Math.max(...arr.map(item => Math.abs(item)))
    } else {
        return null
    }
}
