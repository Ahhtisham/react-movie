import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import Navigate from '../component/Navigate';
import './SingleMovie.scss';

function SingleMovie() {
  const { id } = useParams();
  const { SingleMovie, getSingleMovie } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);  //loading State

  useEffect(() => {
    setIsLoading(true);
    getSingleMovie(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`
    ).then(() => {
      setIsLoading(false);
    });
  }, [id]);
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

  const { title, poster_path, backdrop_path, overview, vote_average, genres } = SingleMovie;
  return (
    <>
      <Navigate />
      <div className="BOX">
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
          <div className="detail">
            <p className="singletitle">{title}</p>
            <p className="singleOver">{overview}</p>
            <p>
              {vote_average}
              <span>
                <i className="fas fa-star" />
              </span>
            </p>
            {genres.map((genre, index) => (
              <span key={genre.id} className="genre">
                {genre.name}
                {index < genres.length - 1 && ','}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;
