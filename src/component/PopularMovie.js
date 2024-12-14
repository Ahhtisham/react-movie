import { useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import "./PopularMovie.scss";

const MovieSection = ({ sectionClassName, titleClassName, descClassName, title, description, movies }) => {
    // Update title with change routes
    useEffect(() => {
        document.title = 'Movies';
    }, []);
    return (
        <>
            <h1 className={titleClassName}>
                <i className="fa-solid fa-window-minimize fa-rotate-90"></i>{title}
            </h1>
            <p className={descClassName}>{description}</p>
            <div className={sectionClassName}>
                <div className="flex">
                    {movies.map(({ id, title, poster_path }) => (
                        <Link to={`/movie/${id}`} key={id} style={{ margin: '0 0 1rem 1.2rem' }}>
                            <div className="thumbnail">
                                <img
                                    src={`http://image.tmdb.org/t/p/original/${poster_path}`}
                                    alt={title}
                                    loading="lazy"
                                    width="248px"
                                    height="384px"
                                />
                                <p className="title">{title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

const PopularMovie = ({ getMovieApi, getTopMovie, Movie, TopRated }) => {
    useEffect(() => {
        getMovieApi();
        getTopMovie();
    }, []);

    const newPopularMovie = Movie.slice(0, 16);
    const newRatedMovie = TopRated.slice(0, 20);

    return (
        <>
            <MovieSection
                sectionClassName="popular"
                titleClassName="Poster_name"
                descClassName="popular_p"
                title="Movies"
                description="Watch your Favorites Movies"
                movies={newPopularMovie}
            />
            <MovieSection
                sectionClassName="topRated"
                titleClassName="Poster_name1"
                descClassName="rated_p"
                title="TopRated"
                description="Watch rating Movies This Time"
                movies={newRatedMovie}
            />
        </>
    );
}

export default memo(PopularMovie);
