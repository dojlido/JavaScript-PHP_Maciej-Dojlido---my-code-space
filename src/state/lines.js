const SET_LINES = 'lines/SET_LINES'
export const setLines = lines => ({
    type: SET_LINES,
    lines
})

export const fetchLines = () => dispatch => {
    fetch(
        'https://frozen-garden-78232.herokuapp.com/transport/lines.json'
    ).then(
        response => response.json()
    ).then(
        lines => dispatch(setLines(lines))
    )
}

const initialState = [];

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_LINES:
            return action.lines;
        default:
            return state
    }
}