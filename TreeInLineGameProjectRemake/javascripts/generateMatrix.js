// Сгенерировать матрицу по заданным размерам
function generateMatrix(size) {
    var result = [];
    for (var y = 0; y < size.height; y++) {
        for (var x = 0; x < size.width; x++) {
            result.push({x : x, y : y});
        }
    }
    // Возвращает масив вида [{x : x, y : y}]
    return result;
}