import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { appendToHistory, getMovieDetailAsync, searchMovieAsync, selectError, selectHistory, selectMovieList } from './redux/actions';

function SidePanel() {

    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");

    const movies = useSelector(selectMovieList);
    const history = useSelector(selectHistory);
    const isError = useSelector(selectError);
    const dispatch = useDispatch();

    let searchMovies = (query) => {
        setIsLoading(true)
        dispatch(searchMovieAsync(query))
        dispatch(appendToHistory(history, query))
        setIsLoading(false)
    }
    let getDetails = (id) => {
        dispatch(getMovieDetailAsync(id))
    }

    return (
        <div id="searchPanel">

            <h4 className="header">Search Here</h4>

            <div className="search_head">
                <input type="text" placeholder={"Search Movie By title"} value={query} onChange={(e) => setQuery(e.target.value)} />
                <input type="submit" value="Search" onClick={() => searchMovies(query)} />
            </div>

            <div className="movies_wrap">
            {isError && <div>Something went wrong ...</div>}
            {movies.length == 0 && <div>No movies found </div>}
                {isLoading && <div>Loading ...</div>}
                {movies.map(function (movie, idx) {
                    return (
                        <div key={idx} className="m_panel" onClick={() => { getDetails(movie.imdbID) }} >
                            <p className="m_title">{movie.title}</p>
                            <p className="m_year">{movie.year}</p>
                        </div>)
                })}
            </div>
        </div>
    );
}

export default SidePanel;
