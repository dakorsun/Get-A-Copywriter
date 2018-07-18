

const switchScreen = function(calendar, arr, direction){
    let result = {
        leftScreen: [],
        mainScreen: [],
        rightScreen: [],
        today: arr.today
    }; 

    let addingArr = [];
    let firstDay;
    let interimDate;
    
    switch(direction){
        case 'left':
            interimDate = arr.leftScreen[0].days[0];
            firstDay = new Date(+interimDate.year, +interimDate.month, +interimDate,day);
            firstDay.setDate(firstDay.getDate() - 42);
        break;
        
        case 'right':
            interimDate = arr.rightScreen[0].days[0];
            firstDay = new Date(+interimDate.year, +interimDate.month, +interimDate,day);
            firstDay.setDate(firstDay.getDate() + 42);
        break;
        default:
            break
            
    }

    let setNewScreen = function(calendar, firstDay){

        let day = firstDay.getDate();
        let month = firstDay.getMonth();

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
            };
            if(+calendar.days[i].month === +date.getMonth() && +calendar.days[i].day === +date.getDate()){
                day.container.isToday = true;
            };
            if(+calendar.days[i].day === 1){
            day.container.isFirstDay = true;
            };
            if(+calendar.days[i].month === date.getMonth()){
            day.container.isMonthActual = true;
            };
    
            week.days = week.days.concat(day);
            };
            res = res.concat(week);
        };
        return res;

    }

    addingArr = setNewScreen(calendar, firstDay);

    switch(direction){
        case 'left':
            result.leftScreen = addingArr; 

            result.rightScreen = arr.mainScreen;
            result.mainScreen = arr.leftScreen;
        break;
        
        case 'right':
            result.rightScreen = addingArr;
            
            result.leftScreen = arr.mainScreen;
            result.mainScreen = arr.rightScreen;
        break
        default:
            break
            
    }

    return result;
};

export default switchScreen();