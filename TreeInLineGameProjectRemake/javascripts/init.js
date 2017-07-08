'use strict';
// console.clear();

//Field Size
var sizeOfField = {
    width   : 7,
    height  : 7
};


/////////////////////////////////////////////////////////////////////////////////////
var field = createField(sizeOfField);

document.body.appendChild(field.element);

field.cells.forEach(createRandomGem);


field.element.addEventListener('transitionend', newCells());
field.element.addEventListener('transitionend', () => newCells());



// Добавить eventListener на div всего поля и определить эллемент на котором был клик
field.element.addEventListener('click', function (event) {
    var cellElement = event.target.closest('.cell');
    if (cellElement) {
        var foundCell = field.cells.find(function (cell) {
            return cell.getX() === +cellElement.dataset.x &&
                cell.getY() === +cellElement.dataset.y;
        });

        selectGem(foundCell);
    }
});


var prevCell = null;
//Функция выбора камня 
function selectGem(currentCell) {
    if (currentCell === prevCell) {
        prevCell.element.classList.remove('active');
        prevCell = null;
        return;
    }

    if (prevCell === null) {
        prevCell = currentCell;
        prevCell.element.classList.add('active');
        return;
    }

    //prevCell != null
    //cell !== prevCell
    if (nearGems(prevCell, currentCell)) {
        swapGems(prevCell, currentCell);
        prevCell.element.classList.remove('active');
        prevCell = null;
    }else{
        //not near
        prevCell.element.classList.remove('active');
        prevCell = currentCell;
        prevCell.element.classList.add('active');
    }
}


setInterval(function() {
    
}, 1001);
field.element.addEventListener('transitionend', () => gemCombo(field.cells));
field.element.addEventListener('transitionend', () => gemFlow(field.cells));


//Свапает выбраные камни местами
function swapGems(cell1, cell2) {
    var x = cell1.getX();
    var y = cell1.getY();

    cell1.setX(cell2.getX());
    cell1.setY(cell2.getY());

    cell2.setX(x);
    cell2.setY(y);
}

//Проверяет камни стоят ли они рядом
function nearGems (cell1, cell2) {
    return Math.abs(cell1.getX() - cell2.getX()) + Math.abs(cell1.getY() - cell2.getY()) < 2;
}

gemCombo(field.cells);
gemFlow(field.cells);


var fieldContainerElem = document.querySelector('.fieldContainer');
var fieldElem = document.querySelector('.field');

var buttonStart = document.createElement('a');
var buttonReset = document.createElement('a');

buttonStart.innerHTML = 'new';
// buttonReset.innerHTML = 'reset';

buttonStart.className = 'waves-effect waves-light btn z-depth-5';
// buttonReset.className = 'waves-effect waves-light btn z-depth-5';

fieldContainerElem.insertBefore(buttonStart, fieldElem);
// fieldContainerElem.insertBefore(buttonReset, fieldElem);



