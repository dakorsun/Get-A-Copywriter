

function setNewScreen(projects, obj, direction){
  
  let arr;
  let today = {
    year: '2018',
    months: '10',
    day: '16'
  }
  let val;


  switch(direction){
      case 'left':
        val = -42;
      break;
      case 'right':
        val = 42;
      break;
      default:
          break        
  }

  let mainFirstDay = obj.mainScreen[0].days[0];
  let countDate = new Date(+mainFirstDay.year, +mainFirstDay.month, +mainFirstDay.day);
  countDate.setDate(countDate.getDate() + val);

  function setScreen(projects, countDate, today) {



    let interimDate = new Date(countDate.getFullYear(), countDate.getMonth(), countDate.getDate());
    
      let checkAndSetDayProjects = function(day, projects) {
        for (let i = 0; i < projects.length; i++) {
          if (
            projects[i].date.year == day.year &&
            projects[i].date.month == day.month &&
            projects[i].date.day == day.day
          ) {
            day.projects = projects[i].projects.map(project => project);
          }else {day.projects = []}
        }
  
        return day;
      };
  
      let arr = [];
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
  
          day = checkAndSetDayProjects(day, projects);
  
          if (day.year === today.year
              && day.month === today.month
              && day.day === today.day) {
                day.container.isToday = true;
          }
  
          if (day.day === '1') {
            day.container.isFirstDay = true;
          }
  
          if (day.year === today.year
            && day.month === today.month) {
              day.container.isMonthActual = true;
          }
  
          interimDate.setDate(interimDate.getDate() + 1);
  
          week.days = week.days.concat(day);
        }
  
        arr = arr.concat(week);
        
      };
    return arr;
  };
    
  arr = setScreen(projects, countDate, today)

  let result = {
    today: today
  }

  switch(direction){
    case 'left':
    result.leftScreen = arr;
    result.mainScreen = obj.rightScreen;
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

  return result;   

};

export default setNewScreen;