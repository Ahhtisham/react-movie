import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context/Context';
import { FaPlayCircle } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Navigate from '../component/Navigate';
import './SingleMovie.scss';

function SingleMovie() {
    const { id } = useParams();
    const { SingleMovie, getSingleMovie } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(true);  // loading state

    useEffect(() => {
        setIsLoading(true);
        getSingleMovie(
            `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`
        ).then(() => {
            setIsLoading(false);
        });
    }, [id]);

    // Update title with routes
    useEffect(() => {
        if (!isLoading && SingleMovie?.title) {
            document.title = SingleMovie.title;
        }
    }, [isLoading, SingleMovie]);

    if (isLoading) {
        return (
            <>
                <Navigate />
                <div className="loading">
                    <h1>Loading...</h1>
                </div>
            </>
        );
    }

    const {
        title,
        poster_path,
        backdrop_path,
        overview,
        vote_average,
        genres,
        homepage
    } = SingleMovie;

    return (
        <>
            <div className="BOX">
                <div className='singletitle'>
                    <Navigate /><p>{title}</p>
                </div>
                <img
                    className="Backdrop"
                    src={`http://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={title}
                />
                <div className="FLEX">
                    <img
                        className="singleImage"
                        src={`http://image.tmdb.org/t/p/original/${poster_path}`}
                        alt={title}
                    />
                    {homepage ? (
                        <NavLink to={homepage}>
                            <p className="singleLink">
                                <FaPlayCircle />
                            </p>
                        </NavLink>
                    ) : null}
                    <div className="detail">
                        <p className="singleOver">{overview}</p>
                        <p>
                            {vote_average}
                            <span>
                                <i className="fas fa-star" />
                            </span>
                        </p>
                        {genres.map((genre) => (
                            <span className="genre">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleMovie;
