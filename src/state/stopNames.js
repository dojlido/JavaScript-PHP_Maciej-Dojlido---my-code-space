const SET_STOP_NAMES = 'stopNames/SET_STOPS'
export const setStopNames = stopNames => ({
    type: SET_STOP_NAMES,
    stopNames
})

export const fetchStopNames = () => dispatch => {
    fetch(
        'https://frozen-garden-78232.herokuapp.com/transport/stopNames.json'
    ).then(
        response => response.json()
    ).then(
        stops => dispatch(setStopNames(stops))
    )
}

const initialState = [];

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_STOP_NAMES:
            return action.stopNames;
        default:
            return state
    }
}