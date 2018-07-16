import initialState from './initialState'

export default function calendarAppActions(state = initialState, action){
    let newState = {};

    switch(action.type) {
        case 'FILTERS_CLICK':
            console.log('2');
            for(let key in state){
                newState[key] = state[key];
            };
            newState.filters.isOpened = !newState.filters.isOpened;
            return(newState);
            break;
        
        case 'FORMATS_CLICK':
            console.log('4')
            for(let key in state){
                newState[key] = state[key];
            };
            newState.formats.isOpened = !newState.formats.isOpened;
            return(newState);
            break;

        case 'FORMAT_CLICK':
            console.log('4')
            for(let key in state){
                newState[key] = state[key];
            };
            newState.formats.list[action.index].isChecked = !newState.formats.list[action.index].isChecked;
            return(newState);
            break;

       

       /*  case 'DAYCELL_HOVER': {
            for(let key in state){
                newState[key] = state[key];
            }
            newState.monthsToRender.mainScreen[action.index].days = state.monthsToRender.mainScreen[action.index].days.map(day => {
                if(day.id === action.id){
                    day.states.onFocus = true;
                    return day
                }else{return day}
            }) 

            return(newState)
        }
        case 'DAYCELL_LEAVE':
            for(let key in state){
                newState[key] = state[key];
            }
            newState.monthsToRender.mainScreen[action.index].days = state.monthsToRender.mainScreen[action.index].days.map(day => {
                if(day.id === action.id){
                    day.states.onFocus = false;
                    return day
                }else{return day}
            }) 

            return(newState)  */  
    

        default: 
        return state
    }
}