

const injectProjects = function(calendar, arr){

    arr.map((obj) => {
        calendar.days.map((day) => {
            if(day.day === obj.date.day && day.month === obj.date.month){
                day.projects = obj.projects
            }
        })
    })

    return calendar;

}

export default injectProjects;