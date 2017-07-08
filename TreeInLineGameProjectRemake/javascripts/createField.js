// Создает поле и добавляет в него клетки по сгенерированой матрице
function createField(sizeOfField) {
    var fieldInHtml = document.createElement('div');
    fieldInHtml.classList.add('field');
    

    var container = document.createElement('div');
    container.classList.add('fieldContainer');
    container.appendChild(fieldInHtml);

    //Задать ширину и высоту поля, em зависит от шрифта
    fieldInHtml.style.width = sizeOfField.width + 'em';
    fieldInHtml.style.height = sizeOfField.height + 'em';

    function addCellToField(cell) {
             fieldInHtml.appendChild(cell.element);
    }

    //Генерирует матрицу и делает копию массива клеток -> каждую клетку добавляет в поле
    var cells = generateMatrix(sizeOfField).map(createCell);
    cells.forEach(addCellToField);

    //Возвращает объект 
    return {
        element : container,
        cells : cells
    }
}