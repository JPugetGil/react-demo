// Lets assume it's the global state (you can add field here)
const initialState = {
    currentPage: '/',
    currentTheme: 'light',
    position: 'visitor'
};

// Add your action type here + describe what it does functionally (don't forget to add '...state' to get other fields)

export default function rootReducers(state = initialState, action) {
    switch (action.type) {
        case "CHANGEPAGE":
            return {
                ...state,
                currentPage: action.newPage
            };
        case "CHANGEPOSITION":
            return {
                ...state,
                position: state.position === 'visitor' ? 'admin' : 'visitor'
            };
        case "CHANGETHEME":
            return {
                ...state,
                currentTheme: state.currentTheme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
}