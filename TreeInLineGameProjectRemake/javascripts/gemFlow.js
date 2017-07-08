//Функция всплытия пустых клеток
function gemFlow(cells) {

    let cellGroupsByX = groupBy(cells, cells => cells.getX());

    //падение камней вниз
    cellGroupsByX.forEach(cellsByX => {
        //можно связать в одну цепочку
        cellsByX.sort((cell1, cell2) => cell1.getY() - cell2.getY());
        cellsByX.sort((cell1, cell2) => cell1.hasGem() - cell2.hasGem());
        cellsByX.forEach((cell, index) => cell.setY(index));
    });
}