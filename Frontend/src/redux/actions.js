import { moviesSlice } from "./reducers";

export const { loadMovie, appendHistory, selectMovie, clearSelected, newError } = moviesSlice.actions;

const BASEURL = "http://127.0.0.1:5000/api/movies/"

export const searchMovieAsync = title => dispatch => {
    dispatch(newError(false));
    const apiUrl = `${BASEURL}${title}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            dispatch(loadMovie([]));
            if (data.search) {
                dispatch(clearSelected({}));
                dispatch(loadMovie(data.search));
            }
        }).catch(err => {
            dispatch(newError(true));
        });
};


export const appendToHistory = (history, query) => (dispatch) => {
    let currentHistory = [...history]
    if (currentHistory.length == 5) {
        currentHistory.pop()
    }
    const topHistory = [query].concat(currentHistory)
    dispatch(appendHistory(topHistory));
};

export const getMovieDetailAsync = id => dispatch => {
    dispatch(newError(false));
    const apiUrl = `${BASEURL}details/${id}`;
    
    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            dispatch(selectMovie(data));
        }).catch(err => {
            dispatch(newError(true));
        });
};



export const selectMovieList = state => {
    return state.movies.list
};

export const selectedMovie = state => {
    return state.movies.selected
};

export const selectHistory = state => {
    return state.movies.history
};


export const selectError = state => {
    return state.movies.newError
};