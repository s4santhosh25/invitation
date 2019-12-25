import { createStore } from 'redux'

let initialState = {
    theme: {
        mode: 'light',
        themeColor: "#00a0df",
        timeLineIconStyle: {
            background: '#00a0df',
            color: '#fff'
        },
        timeLineContentStyle: {
            background: '#12496b',
            color: 'white'
        }
    }
};

function counter(state = initialState, action) {
    switch (action.type) {
        case 'THEME':
            if (action.data) {
                return {
                    ...state,
                    theme: {
                        mode: 'dark',
                        themeColor: "#f44336",
                        timeLineIconStyle: {
                            background: '#f44336',
                            color: '#fff'
                        },
                        timeLineContentStyle: {
                            background: '#a22a21',
                            color: '#fff'
                        }
                    }
                }
            }
            else {
                return {
                    ...state,
                    theme: {
                        ...initialState.theme
                    }
                }
            }
        default:
            return { ...state }
    }
}

let store = createStore(counter)

export default store;