import initialState from './initialState';
import setNewScreen from './setNewScreen';

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
            
            return(newState)
        default: 
        return state
    }
}