import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/Context';
import Navigate from '../component/Navigate';
import "./Search.scss";

function Search() {
    const { getSearchMovie, SearchMovie } = useGlobalContext();
    const { routerQuery } = useParams();

    useEffect(() => {
        getSearchMovie(`https://api.themoviedb.org/3/search/movie?query=${routerQuery}&api_key=4e44d9029b1270a757cddc766a1bcb63`);
    }, [routerQuery]);

    return (
        <>
            <Navigate />
            <div className="searchContainer">
                {SearchMovie.length >= 1 ?
                    <h1 className="Search_name"><i className="fa-solid fa-window-minimize fa-rotate-90"></i>{routerQuery}</h1>
                    :
                    <h1 className="Search_name"><i className="fa-solid fa-window-minimize fa-rotate-90"></i>Not available...</h1>
                }
                <span className="searchTitle">Your search results: {routerQuery}</span>
                <div className='search_flex'>
                    {SearchMovie.length <= 0 ?
                        <h1 className="errorShow"> No results Found ! <i className="fa-solid fa-triangle-exclamation"></i></h1>
                        :
                        SearchMovie.map((movie) => {
                            return (
                                <Link to={`/movie/${movie.id}`} style={{ margin: '0 0 1rem 1.2rem' }} key={movie.id}>
                                    <div className="search_thumbnail">
                                        {movie.poster_path ? (
                                            <>
                                                <img
                                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                                    alt={movie.title}
                                                    loading='lazy'
                                                    width='248px'
                                                    height='384px'
                                                />
                                                <p>{movie.title}</p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="no-poster"></div> {/*empty div for no poster and title*/}
                                            </>
                                        )}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Search;
