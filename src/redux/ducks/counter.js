
// these are references to our actions
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

// these are actions
export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})

// our initial state
const initialState = {
    count: 0,
}

// this is our reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return { ...state, count: state.count + 1}
        case DECREMENT: 
            return { ...state, count: state.count - 1}
        default: 
            return state
    }
}