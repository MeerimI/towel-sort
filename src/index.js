// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0 || matrix.length === 0) {
        return []
    }
    var result = []
    for (i = 0; i < matrix.length; i++) {

        if (i % 2 == 0) {
            result.push(...matrix[i]);
        } else {
            result.push(...matrix[i].reverse());
        }

    }
    return result
}