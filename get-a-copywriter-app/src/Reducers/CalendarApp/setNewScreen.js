import setActualMonth from './setActualMonth';
import setActualYear from './setActualYear';

const setNewScreen = function (projects, obj, direction){
  
  console.log('start')

  let arr;
  let today = new Date(2018, 10, 16)
  let val;


  switch(direction){
      case 'left':
        val = -84;
      break;
      case 'right':
        val = 84;
      break;
      default:
          break        
  }

  let mainFirstDay = obj.mainScreen[0].days[0];
  
  let countDate = new Date(+mainFirstDay.year, +mainFirstDay.month, +mainFirstDay.day);
 
  countDate.setDate(countDate.getDate() + val);
 

  const setScreen = function(projects, countDate, today) {

    let interimDate = new Date(countDate.getFullYear(), countDate.getMonth(), countDate.getDate());
   
      let checkAndSetDayProjects = function(day, projects) {
        for (let i = 0; i < projects.length; i++) {
          day.projects = [];


          if (
            projects[i].date.year === day.year &&
            projects[i].date.month === day.month &&
            projects[i].date.day === day.day
          ) {
            day.projects = projects[i].projects.map(project => project);
            return day
          }
        }
  
        return day;
      };
  
      let res = [];
      for (let w = 0; w < 6; w++) {
        let week = {
          index: w,
          days: []
        };
        for (let i = 0; i < 7; i++) {
          let day = {
            year: interimDate.getFullYear() + "",
            month: interimDate.getMonth() + "",
            day: interimDate.getDate() + "",
            container: {
              isToday: false,
              isFirstDay: false,
              isMonthActual: false
            }
  
          };
  
          checkAndSetDayProjects(day, projects);
  
  
          if (day.day === '1') {
            day.container.isFirstDay = true;
          }
  
          if (day.year === today.getFullYear() + ''
            && day.month === today.getMonth()+ '') {
             day.container.isMonthActual = true;
             if(day.day === today.getDate() + ''){
             }
          }


          week.days = week.days.concat(day);
  
          interimDate.setDate(interimDate.getDate() + 1);
  
        }
  
        res = res.concat(week);
        
      };
    return res;
    
  };
    
  arr = setScreen(projects, countDate, today)

  let result = {
    today: today
  }

  switch(direction){
    case 'left':
    result.leftScreen = arr;
    result.mainScreen = obj.leftScreen;
    result.rightScreen = obj.mainScreen;
    break;
    
    case 'right':
      result.leftScreen = obj.mainScreen;
      result.mainScreen = obj.rightScreen;
      result.rightScreen = arr;
    break;
    
    default:
    break        
  }

  result.actualMonth = setActualMonth(result.mainScreen);
  result.actualYear = setActualYear(result.mainScreen);

  return result;   

};

export default setNewScreen;