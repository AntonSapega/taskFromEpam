let walletDB = 0;

function wallet(inputString) {
    const parseString = inputString.split(' ');
    console.log(parseString);

    parseString.forEach(elem => {
        if (elem.indexOf('бун') >= 0) {
            const cash = parseInt(elem);
            //    walletDB.push( parseInt(cash, 10) );
            walletDB += parseInt(cash, 10);
        }

        if (elem.indexOf('коп') >= 0) {
            let cash = '';
            const positionPenny = elem.indexOf('коп');

            for (let i = 0; i < positionPenny; i++) {
                cash += elem[i];
            }

            walletDB += parseInt(cash, 10) / 100;
        }
    })

}

function outputForUser(inputString) {
    wallet(inputString);
    const BYN = Math.trunc(walletDB);
    console.log(BYN);
    const quantityNumbers = BYN.toString().length;
    let penny;

    for (const index in walletDB.toString()) {
        if (walletDB.toString()[index] === '.') {
            console.log(typeof index === 'number');
            const indexOfNeed = parseInt(index, 10) + 1;
            penny = walletDB.toString().slice(indexOfNeed);
            penny = parseInt(penny, 10);
            console.log(penny + 'df');

        }
    }
    // console.log(penny);

}

outputForUser('100бун + 4бун + 4бун + 3коп - 1бун');

console.log(walletDB);

typeof 37 === 'number';