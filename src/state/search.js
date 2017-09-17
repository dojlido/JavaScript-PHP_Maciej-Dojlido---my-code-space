const SEARCH = 'search/SEARCH'
export const search = (searchParams) => ({
    type: SEARCH,
    searchParams
})

const initialState = {
    searchParams: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                searchParams: action.searchParams
            }
        default:
            return state
    }
}