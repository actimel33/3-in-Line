//Функция поиска и удаления групп длинна которых 3 и более камня
function gemCombo(cells) {
    //поиск и удаление вертикальных комбинаций
    let cellGroupsByX = groupBy(cells, cells => cells.getX())
        .forEach(cellsByX => {
            //можно связать в одну цепочку
            cellsByX.sort((cell1, cell2) => cell1.getY() - cell2.getY());

            groupGems(cellsByX)
                .filter(gg => gg.length >= 3)
                .forEach(gg => {
                    gg.forEach(cell => cell.setGem(0));
                });
        });

    let cellGroupsByY = groupBy(cells, cells => cells.getY())
        .forEach(cellsByY => {
            //можно связать в одну цепочку
            cellsByY.sort((cell1, cell2) => cell1.getX() - cell2.getX());

            groupGems(cellsByY)
                .filter(gg => gg.length >= 3)
                .forEach(gg => {
                    gg.forEach(cell => cell.setGem(0));
                });
        });

}


//Функция создания групп с одинаковыми камнями
function groupGems(gemLine) {
    let result = [];
    let currentGroup = [];
    gemLine.forEach(function (currentCell) {

        if (currentGroup.length === 0) {
            currentGroup.push(currentCell);
        } else {
            let prevCell = currentGroup[0];
            if (prevCell.getGemId() === currentCell.getGemId()) {
                currentGroup.push(currentCell);
            } else {
                result.push(currentGroup);
                currentGroup = [currentCell];
            }
        }
    });
    result.push(currentGroup);

    return result;
}