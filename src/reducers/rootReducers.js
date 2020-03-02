// Lets assume it's the global state (you can add field here)
const initialState = {
    currentPage: '/',
    currentTheme: 'light',
    count: 0,
    visitors: 0
};

// Add your action type here + describe what it does functionally (don't forget to add '...state' to get other fields)

export default function rootReducers(state = initialState, action) {
    switch (action.type) {
        case "CHANGETHEME":
            return {
                ...state,
                currentTheme: state.currentTheme === 'light' ? 'dark' : 'light'
            };
        case "REDUX_WEBSOCKET::MESSAGE":
            switch (Object.keys(JSON.parse(action.payload.message))[0]) {
                case 'count':
                    return {
                        ...state,
                        count: JSON.parse(action.payload.message).count,
                    };
                case 'path':
                    return {
                        ...state,
                        currentPage: JSON.parse(action.payload.message).path,
                    };
                case 'connections':
                    return {
                        ...state,
                        visitors: JSON.parse(action.payload.message).connections
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
}
