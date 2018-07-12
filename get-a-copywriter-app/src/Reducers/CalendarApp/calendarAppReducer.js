import initialState from './initialState'

export default function calendarAppActions(state = initialState, action){
    let newState = {};

    switch(action.type) {
        case 'FILTERS_CLICK':
            console.log('2');
            for(let key in state){
                newState[key] = state[key];
            }
            newState.filters.isOpened = !newState.filters.isOpened;
            return(newState)
        
        /* case 'DAYCELL_HOVER':
            for(let key in state){
                newState[key] = state[key];
            }
            newState.dayCell.isOnFocus = true;
            return(newState)
        
        case 'DAYCELL_HOVER':
            for(let key in state){
                newState[key] = state[key];
            }
            newState.dayCell.isOnFocus = false;
            return(newState) */
    

        default: 
        return state
    }
}