
import setDayName from './setDayName'

const performMonthsToRender = function(calendar, today) {

  let year = +today.year,
      month = +today.month,
      day = +today.day;

  let actualDay = new Date(year, month, day);
  

  let result = {
    leftScreen: [],
    mainScreen: [],
    rightScreen: [],
    today: today,
    setDayName: setDayName
  };


  const setScreen = function(date, calendar, settingType){
    let val = 1;
    switch(settingType){
      case 'left': 
        val = -42;
        break;
      case 'main':
        val = 0;
        break;
      case 'right':
        val = 42;
        break;
    };

    let interimDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    interimDate.setDate(interimDate.getDate() - interimDate.getDay() - 7 + val);
    let day = interimDate.getDate() + '';
    let month = interimDate.getMonth() + '';



    let getIndex = function(calendar, day, month){
      for (let i = 0; i < calendar.days.length; i++) {
        if (calendar.days[i].month == month) {
          if (calendar.days[i].day == day) {
            return i;
          }
        }
      }
    };
    
    let index = getIndex(calendar, day, month);
    let res = [];  
      for(let w = 0; w < 6; w++){
        let week = {
          week: w,
          days: []
        };
        for(let i = (index + w * 7); i < ((index + w * 7) + 7); i++){
          let day = {
            year: calendar.days[i].year,
            month: calendar.days[i].month,
            day: calendar.days[i].day,
            id: calendar.days[i].id,
            projects: calendar.days[i].projects,
            container: {
              isToday: false,
              isFirstDay: false,
              isMonthActual: false
            }
          }

          if(+calendar.days[i].month === +date.getMonth() && +calendar.days[i].day === +date.getDate()){
            day.container.isToday = true;
          }

          if(+calendar.days[i].day === 1){
            day.container.isFirstDay = true;
          }

          if(+calendar.days[i].month === date.getMonth()){
            day.container.isMonthActual = true;
          }

          week.days = week.days.concat(day);
        }
        res = res.concat(week);
      };
      return res;
  };
  result.leftScreen = setScreen(actualDay, calendar, 'left');
  result.mainScreen = setScreen(actualDay, calendar, 'main');
  result.rightScreen = setScreen(actualDay, calendar, 'right');

  return result;


};


export default performMonthsToRender;