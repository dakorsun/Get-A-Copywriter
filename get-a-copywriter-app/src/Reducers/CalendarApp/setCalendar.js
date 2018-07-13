const setCalendar = function() {
  let date = new Date(2018, 10, 16);
  console.log(date);

  let today = {
    year: date.getFullYear() + "",
    month: date.getMonth() + "",
    day: date.getDate() + ""
  };
  console.log(today);

  let createCalendar = function(year, month, day) {
    year = +year
    month = +month
    day = +day
    let countDate = new Date(year, month, 1);

    let result = {
      days: [],
      today: today
    };


    countDate.setDate(countDate.getDate() - 200)
    
    
    for(let i = 0; i < 300; i++) {
      let day = {
        year: "",
        month: "",
        day: "",
        container: {}
      };
      day.year = countDate.getFullYear() + "";
      day.month = countDate.getMonth() + "";
      day.day = countDate.getDate() + "";
      result.days = result.days.concat(day);

      countDate.setDate(countDate.getDate() + 1);
    }

    console.log(countDate);

    console.dir(result);
    return result;
  };

  let calendar = createCalendar(today.year, today.month, today.day);
  return calendar
};

export default setCalendar;
