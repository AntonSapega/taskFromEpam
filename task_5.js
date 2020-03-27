const minValues = [];
let count = 1;
let iteration = -1;

function underMainMatrixDiagonal(inputData) {

    for(const oneLine of inputData) {
        
        for(let i = iteration; i !== -1; i--) {
            if (oneLine[i] !== undefined) {
                minValues.push(oneLine[i]);
            }
            
        }
        iteration ++;
    }
}

function sumValues(matrix) {
    underMainMatrixDiagonal(matrix);
    let sum = 0;

    minValues.forEach(elem => {
        sum += elem;
    })
    return sum;
}

console.log(sumValues([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
    ] 
     
    ));
