import setCalendar from './setCalendar';
import performMonthsToRender from './performMonthsToRender';

    const calendar = setCalendar();

const initialState = {
    filters: {
        isOpened: false
    },
    calendar: calendar,
    monthsToRender: performMonthsToRender(calendar, calendar.today)
}


export default initialState