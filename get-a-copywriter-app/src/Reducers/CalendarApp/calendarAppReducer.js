import initialState from './initialState';
import setNewScreen from './setNewScreen';
import setNewWidgetRender from './setNewWidgetRender'

export default function calendarAppActions(state = initialState, action){
    let newState = {};

    switch(action.type) {
        case 'FILTERS_CLICK':
            for(let key in state){
                newState[key] = state[key];
            };
            newState.filters.isOpened = !newState.filters.isOpened;
            return(newState);
            break;
        
        case 'FORMATS_CLICK':
            for(let key in state){
                newState[key] = state[key];
            };
            newState.formats.isOpened = !newState.formats.isOpened;
            return(newState);
            break;

        case 'FORMAT_CLICK':
            for(let key in state){
                newState[key] = state[key];
            };
            newState.formats.list[action.index].isChecked = !newState.formats.list[action.index].isChecked;
            return(newState);
            break;

        case 'SWITCH_SCREEN':
            for(let key in state){
                newState[key] = state[key];
            };
            newState.monthsToRender = setNewScreen(state.projects, state.monthsToRender, action.direction);       
            
            return(newState);
        
        case 'OPEN_ADD_MODAL':
            
            for(let key in state){
                newState[key] = state[key];
            };
            newState.isAddPopUpOpened = true;

        return(newState);


        case 'SAVE_CLICK':
            for(let key in state){
                newState[key] = state[key];
            };
            newState.isAddPopUpOpened = false;

            return(newState);

        case 'ORDER_CLICK':
            for(let key in state){
                newState[key] = state[key];
            };
            
            newState.isAddPopUpOpened = false;

            return(newState);

        case 'CLOSE_ADD_MODAL':
            for(let key in state){
                newState[key] = state[key];
            };
            
            newState.isAddPopUpOpened = false;

            return(newState);

        case 'SWITCH_WIDGET_SCREEN':
            for(let key in state){
                newState[key] = state[key];
            };

            newState.calendarWidget.container = setNewWidgetRender(action.actualYear, action.actualMonth, action.direction)
        
            return(newState);

        case 'OPEN_DAY_MODAL' :
            for(let key in state){
                newState[key] = state[key];
            };

            switch(action.place){
                case 'order':
                    newState.calendarWidget.isOpened.order = true;
                    break;

                case 'publish':
                    newState.calendarWidget.isOpened.publish = true;
                    break;
                default: 
                    break
            }
            return(newState);

        case 'SELECT_MODAL_DAY':
            for(let key in state){
                newState[key] = state[key];
            };

            newState.calendarWidget.container.render.mainScreen = newState.calendarWidget.container.render.mainScreen.map((week, i) => 
               { i === action.week ? week.days.map((day, i) => {
                    i === action.day ? day.isSelected = true : null
               }) : null}
            )

            return(newState)

        default: 
        return state
    }
}