import performCalendarWidget from './performCalendarWidget'

const setNewWidgetRender = function(year, month, direction) {

    let result = {}

    console.log(year, month)

    switch(direction) {
        case 'left':
            result = {
                render: performCalendarWidget(year, +month - 1 + '')
            };
            break
        case 'right':
            result = {
                render: performCalendarWidget(year, +month + 1 + '')
            };
            break
        default:
            result = {
                render: performCalendarWidget(year, month)
            };
            break
    }

    return result
}

export default setNewWidgetRender