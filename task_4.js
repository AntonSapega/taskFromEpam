const minValueDB = [];
let sum = 0;

function minValue(startArray) {
    let minValue = 0;
    

    for(const value of startArray) {
        const helperArray = [];
        const selectedString = value.split(' ');
        // console.log(selectedString);
        for(const valueString of selectedString) {
            helperArray.push(parseInt(valueString, 10));
        }
        // console.log(helperArray);
        minValue = helperArray[0];
        
        for(const numberOfArray of helperArray) {
            if (numberOfArray <= minValue) {
                minValue = numberOfArray;
            }
        }
        minValueDB.push(minValue);
    }
    console.log(minValueDB);
}

function calculatedMinValue(inputData) {
    minValue(inputData);
    for(const valueForSum of minValueDB) {
        sum += valueForSum;
    }
    return sum;

}

console.log(calculatedMinValue([
    '1 3 55 101 99',
    '100500 99 51 333 364 1 9',
    '-968 3 -98 312 3',
    '5 0 0 0 -4 354 1',
    '75 -9 0 1 1000 999 -5',
]));

