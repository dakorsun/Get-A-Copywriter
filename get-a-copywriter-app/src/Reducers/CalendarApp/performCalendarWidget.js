
const performCalendarWidget = function(year, month) {

    let result = {
        year: year,
        month: month,
        mainScreen: []
    };

    let setScreen = function (year, month) {

        let interimDate = new Date(+year, +month, 1);   

        

        let calcDayslength = function(date) {
            let x = date.getMonth();
            let counter = 0;


            for ( let i = 0; i < date.getDay(); i++) {
                counter ++
            }

        
            while( date.getMonth() === x ) {
                counter++;
                date.setDate(date.getDate() + 1);
            }
            

            for (let i = date.getDay(); i < 7; i++) {
                counter++;
                date.setDate(date.getDate() + 1);
            } 

            return counter;

        }


        let weekLength = calcDayslength(interimDate) / 7;


        let newCountDate = new Date(+year, +month, 1);

        newCountDate.setDate(newCountDate.getDate() - newCountDate.getDay())


        let res = [];

        for( let w = 0; w < weekLength; w++) {
            
            let week = {
                index: w,
                days: []
            }
            
            for( let i = 0; i < 7; i++ ) {
                let day = {
                    year: newCountDate.getFullYear() + '',
                    month: newCountDate.getMonth() + '',
                    day: newCountDate.getDate() + '',
                    isSelected: false
                
                }
                week.days = week.days.concat(day);
                newCountDate.setDate(newCountDate.getDate() + 1);
            }
            res = res.concat(week)
        }
        return res;    
    }

    result.mainScreen = setScreen(year, month);

    console.log(result.mainScreen[0].days)
    return result  
};

export default performCalendarWidget;