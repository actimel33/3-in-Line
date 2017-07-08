function falsePredicate() {
    return false;
}

function diagonal(x, y) {
    return x === y;
}

function subDiagonal(x, y, size) {
    return size - 1 === x + y;
}

function xDiagonal(x, y, size) {
    return diagonal(x, y) || subDiagonal(x, y, size);
}

function chess(x, y) {
    return (x - y) % 2 === 0;
}

function pyramidUp(x, y, size) {
    return size - (y + 1) >= x && x >= y;
}

function pyramidDown(x, y, size) {
    return y >= x && size - (y + 1) <= x;
}

function clock(x, y, size) {
    return pyramidUp(x, y, size) || pyramidDown(x, y, size);
}