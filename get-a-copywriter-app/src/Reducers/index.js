import { combineReducers } from 'redux'
import headerReducer from './Header/headerReducer'
import subMenuReducer from './SubMenu/submenuReducer'
import calendarAppReducer from './CalendarApp/calendarAppReducer'


const rootReducer = combineReducers({
    headerReducer,
    subMenuReducer,
    calendarAppReducer
})

export default rootReducer;