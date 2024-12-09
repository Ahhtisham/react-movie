import { createContext, useCallback, useContext, useReducer } from "react"
import reducer from "../reducer/MovieReducer"
import axios from "axios";

const AppContext = createContext()

const initialState = {
    Movie: [],
    TopRated: [],
    SingleMovie: {},
    SearchMovie: [],
    query: ''
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //POPULAR MOVIE API//
    const getMovieApi = useCallback(async () => {
        const API = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63'
        try {
            const res = await axios.get(API)
            const Movie = await res.data.results
            dispatch({ type: "MY_API_DATA", payload: Movie })
        } catch (error) {
            console.log(error)
        }
    }, [])

    // TOP RATED API//
    const getTopMovie = useCallback(async () => {
        const API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63'
        try {
            const res = await axios.get(API)
            const TopRated = await res.data.results
            dispatch({ type: "TOP_RATED", payload: TopRated })
        } catch (error) {
            console.log(error)
        }
    }, [])

    // SINGLE MOVIE API//
    const getSingleMovie = async (url) => {
        try {
            const res = await axios.get(url)
            const SingleMovie = await res.data
            dispatch({ type: "MY_SINGLE_MOVIE", payload: SingleMovie })
        } catch (error) {
            console.log(error)
        }
    }

    // SEARCH API //.
    const getSearchMovie = async (url) => {
        try {
            const res = await axios.get(url)
            const SearchMovie = await res.data.results
            dispatch({ type: "MY_SEARCH_MOVIE", payload: SearchMovie })
            dispatch({ type: "SET_QUERY", payload: '' })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppContext.Provider value={{ ...state, getSingleMovie, getSearchMovie, dispatch, getMovieApi, getTopMovie }}>
            {children}
        </AppContext.Provider>
    )
}

// custom Hook
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext, AppContext }