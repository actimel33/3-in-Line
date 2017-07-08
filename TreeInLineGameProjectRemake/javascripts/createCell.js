//Создает клетки для поля
function createCell(point) {
    var cell = document.createElement('div');
    cell.classList.add('cell');

    var innerCell = document.createElement('div');
    cell.appendChild(innerCell);

    var cellObj = {
        element : cell,

        //Возвращает цифру которая стоит стоит в атрибуте data-gem-id 
        getGemId : function () {
          return +innerCell.dataset.gemId;
        },

        // Проверяет есть у гема data-gem-id
        hasGem : function () {
            return this.getGemId() > 0;
        },

        // Задает div-у классы и присваивает id в атрибут data-gem-id
        setGem : function (id) {
            innerCell.className = `gem gem-${id} animated zoomIn`;
            innerCell.dataset.gemId = id;
            setTimeout(function() {
                innerCell.classList.remove('zoomIn');
            }, 900);
        },

        //Возвращает координату "X" котороая записана в атрибуте data-x и "Y" соответсвенно
        getX : function () {
            return +cell.dataset.x;
        },
        getY : function () {
            return +cell.dataset.y;
        },

        // Присваивает в data-x значение которое принимает + задает отступ слева
        setX : function (x) {
            cell.dataset.x = x;
            cell.style.left = x +'em';
        },
        // Присваивает в data-y значение которое принимает + задает отступ сверху
        setY : function (y) {
            cell.dataset.y = y;
            cell.style.top = y +'em';
        }
    };

    // Вызываем функцию для задавания позиции в таблице
    cellObj.setX(point.x);
    cellObj.setY(point.y);

    //Возвращает объект cell с методами
    return cellObj;
}

//Задать рандомный класс гема
function createRandomGem(cell) {
    
    // Генерация случайного Id для гема
    var gemId = Math.floor(Math.random() * 9 + 1);
    //и вызывает метод присвоения гему Id у объекта cell
            // console.log(cell.element.firstChild)
        cell.setGem(gemId);
  
}

function newCells() {
    setTimeout(function(){
        field.cells.forEach(function(item) {
            var empty = item.element.firstChild.getAttribute('data-gem-id') == 0;
            if (empty) {
                createRandomGem(item);
            }
        })

    },1000)
}