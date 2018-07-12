
const initialState = {
    names: {
        isOpened: false,
        popUp: {
            names: [
                'Chester Nicols',
                'Terry Bowen',
                'Barry Fiqueroa'
            ] 
        }
    },
    messages: {
        unRead: '97'
    },
    about: {
        isOpened: false,
        manager: {
            name: 'Dannii Olsen',
            id: '888.889.0150.ex.s5',
            image: ''
        },
        links: [
            {
                name: 'Message support'       
            },
            {
                name: 'FAQ' 
            },
            {
                name: 'API'  
            }
        ]
    },
    user: {
        isOpened: false,
        name: 'Joshua Fields'
    }
}

export default function headerActions(state = initialState, action) {
    let newState = {};

    switch(action.type){
        case 'HEADER_NAMES_HOVER':
            for(let key in state){
                newState[key] = state[key];
            }
            newState.names.isOpened = true;
            return(newState)

        case 'HEADER_NAMES_LEAVE':
            for(let key in state){
                newState[key] = state[key];
            } 
            newState.names.isOpened = false;
            return(newState)
        
        
        
        case 'HEADER_ABOUT_HOVER':
            for(let key in state){
                newState[key] = state[key];
            } 
            newState.about.isOpened = true;
            return(newState)

        case 'HEADER_ABOUT_LEAVE':
            for(let key in state){
                newState[key] = state[key];
            } 
            newState.about.isOpened = false;
            return(newState)
            

        case 'HEADER_USER_HOVER': 
            for(let key in state){
                newState[key] = state[key];
            } 
            newState.user.isOpened = true;
            return(newState)

        case 'HEADER_USER_LEAVE':
            for(let key in state){
                newState[key] = state[key];
            } 
            newState.user.isOpened = false;
            return(newState)

        default:
            return state
        
    }
}
