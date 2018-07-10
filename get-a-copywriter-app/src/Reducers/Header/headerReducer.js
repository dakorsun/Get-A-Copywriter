
const initialState = {
    names: {
        isOpened: false,
        isFirstTimeLanded: true,
        popUp: {
            names: [
                'Chester Nicols',
                'Terry Bowen',
                'Barry Fiqueroa'
            ] 
        }
    }
}

export default function headerActions(state = initialState, action) {
    let newState;
    switch(action.type){
        case 'HEADER_NAMES_HOVER':
            newState = state;
            newState.names.isOpened = true;
            newState.names.isFirstTimeLanded = false;
            return(newState)

        case 'HEADER_NAMES_LEAVE': 
            newState = state;
            newState.names.isOpened = false;
            return(newState)

        default:
            return state
        
    }
}
