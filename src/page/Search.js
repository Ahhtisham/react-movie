import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/Context';
import Navigate from '../component/Navigate';
import "./Search.scss";

function Search() {
    const { getSearchMovie, SearchMovie } = useGlobalContext();
    const { routerQuery } = useParams();
    const [Loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        setLoading(true);
        getSearchMovie(`https://api.themoviedb.org/3/search/movie?query=${routerQuery}&api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then(() => {
                setLoading(false);
            });
    }, [routerQuery]);

    // Update title with change routes
    useEffect(() => {
        if (!Loading && routerQuery) {
            document.title = `${routerQuery}`;
        }
    }, [Loading, routerQuery]);

    if (Loading) {
        return (
            <>
                <Navigate />
                <div className="searchLoading">
                    <h1>Loading...</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="searchContainer">
                {SearchMovie.length >= 1 ? (
                    <h1 className="Search_name"><span><Navigate /></span>{routerQuery}</h1>
                ) : (
                    <h1 className="Search_name"><span><Navigate /></span>Not available...</h1>
                )}
                <span className="searchTitle">Your search results: {routerQuery}</span>
                <div className='search_flex'>
                    {SearchMovie.length <= 0 ? (
                        <h1 className="errorShow"> No results Found! <i className="fa-solid fa-triangle-exclamation"></i></h1>
                    ) : (
                        SearchMovie.map((movie) => (
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
                                        <NavLink to={"/"}>
                                            <div className="no-poster">
                                                <p style={{ color: "#ffffffea" }}>{`No available`}</p>
                                            </div>
                                        </NavLink>
                                    )}
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;
