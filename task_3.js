const zodiacDB = {
    aries: ['19/04', '13/05', 'Овен'],
    taurus: ['14/05', '19/06', 'Телец'],
    gemini: ['10/06', '10/07', 'Близнецы'],
    cancer: ['21/07', '09/08', 'Рак'],
    leo: ['10/08', '15/09', 'Лев'],
    virgo: ['16/09', '30/10', 'Дева'],
    libra: ['31/10', '22/11', 'Весы'],
    scorpio: ['21/11', '29/11', 'Скорпион'],
    ophiuchus: ['30/11', '17/12', 'Змееносец'],
    sagittarius: ['18/12', '18/01', 'Стрелец'],
    capricorn: ['19/01', '15/02', 'Козерог'],
    aquarius: ['16/02', '11/03', 'Водолей'],
    pisces: ['12/03', '18/04', 'Рыбы'],
  };
  
  
  function checkZodiak(date) {
    const markerPosition = date.split('/');
 
    const inputedDay = parseInt(markerPosition[0], 10);
    const inputedMonth = parseInt(markerPosition[1], 10);
    
    for(let zodiacName in zodiacDB) {
   
      const zodiacStartDay = parseInt(zodiacDB[zodiacName][0].split('/')[0], 10);
      const zodiacStartMonth = parseInt(zodiacDB[zodiacName][0].split('/')[1], 10);

      const zodiacEndDay = parseInt(zodiacDB[zodiacName][1].split('/')[0], 10);
      const zodiacEndMonth = parseInt(zodiacDB[zodiacName][1].split('/')[1], 10);
      // console.log(zodiacEndDay, zodiacEndMonth);
      // console.log( typeof zodiacStartDay === 'number');

        
        if (inputedMonth === zodiacStartMonth && inputedDay >= zodiacStartDay) {
          return zodiacDB[zodiacName][2];
        }

        if (inputedMonth === zodiacEndMonth && inputedDay <= zodiacEndDay) {
          return zodiacDB[zodiacName][2];
        }
      
    }
    
  }
  
  export default checkZodiak;