const MovieReducer = (state, action) => {
    switch (action.type) {
        case "MY_API_DATA": {
            return {
                ...state,
                Movie: action.payload
            }
        }
        case "MY_SINGLE_MOVIE": {
            return {
                ...state,
                SingleMovie: action.payload
            }
        }
        case "TOP_RATED": {
            return {
                ...state,
                TopRated: action.payload
            }
        }
        case "MY_SEARCH_MOVIE": {
            return {
                ...state,
                SearchMovie: action.payload
            }
        }
        case "SET_QUERY": {
            return {
                ...state,
                query: action.payload
            }
        }
    }
}
export default MovieReducer