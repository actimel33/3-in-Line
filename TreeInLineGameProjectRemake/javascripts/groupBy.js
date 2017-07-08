function groupBy(items, predicateFn) {
    let resultObj = {};

    items.forEach(cell => {
        let groupName = predicateFn(cell);
        resultObj[groupName] = resultObj[groupName] || [];
        resultObj[groupName].push(cell);
    });

    let resultArr = [];
    for (let key in resultObj) {
        resultArr.push(resultObj[key]);
    }

    return resultArr;
}