import setActualMonth from './setActualMonth';
import setActualYear from './setActualYear';

const performMonthsToRender = function(projects) {
  let today = new Date(2018, 10, 16);

  let result = {
    leftScreen: [],
    mainScreen: [],
    rightScreen: [],
    today: {
      year: today.getFullYear() + "",
      month: today.getMonth() + "",
      day: today.getDate() + ""
    }
  };

  const setScreen = function(date, projects, settingType) {
    let val;
    switch (settingType) {
      case "left":
        val = -42;
        break;
      case "main":
        val = 0;
        break;
      case "right":
        val = 42;
        break;
    }

    let interimDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    interimDate.setDate(interimDate.getDate() - interimDate.getDay() - 7 + val);

    let checkAndSetDayProjects = function(day, projects) {
      for (let i = 0; i < projects.length; i++) {
        day.projects = [];
        
        if (
          projects[i].date.year === day.year &&
          projects[i].date.month === day.month &&
          projects[i].date.day === day.day
        ) {
          day.projects = projects[i].projects.map(project => project);
          
          return day;
        } 
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

        if (day.year === date.getFullYear() + ''
            && day.month === date.getMonth() + ''
            && day.day === date.getDate() + '') {
              day.container.isToday = true;
        }

        if (day.day === '1') {
          day.container.isFirstDay = true;
        }

        if (day.year === date.getFullYear() + ''
          && day.month === date.getMonth() + '') {
            day.container.isMonthActual = true;
        }

        interimDate.setDate(interimDate.getDate() + 1);

        week.days = week.days.concat(day);
      }

      arr = arr.concat(week);
     
    };
    return arr;
  };
  result.leftScreen = setScreen(today, projects, "left");
  result.mainScreen = setScreen(today, projects, "main");
  result.rightScreen = setScreen(today, projects, "right");

  result.actualMonth = setActualMonth(result.mainScreen);
  result.actualYear = setActualYear(result.mainScreen);

  return result;
};


export default performMonthsToRender;