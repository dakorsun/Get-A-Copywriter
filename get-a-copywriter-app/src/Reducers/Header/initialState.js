
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
};

export default initialState;