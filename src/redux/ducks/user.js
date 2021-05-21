
// these are references to our actions
const GET_USER = 'GET_USER'
const SET_USER = 'SET_USER'

// these are actions
export const getUser = () => ({
    type: GET_USER,
})

export const setUser = (user) => ({
    type: SET_USER,
    user: user
})

// our initial state
const initialState = {
    count: undefined,
}

// this is our reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: 
            const { user } = action
            return { ...state, user: user}
        default: 
            return state
    }
}