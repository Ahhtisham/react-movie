import React from 'react'
import PopularMovie from '../component/PopularMovie'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/Context'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "./Slider.scss"

function Slider() {
  const { getMovieApi, getTopMovie, Movie, TopRated } = useGlobalContext()
  const newCarouselMovie = Movie.slice(0, 6)
  return (
    <>
      <section className='poster'>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
        >
          {newCarouselMovie.map((movie) => {
            const { backdrop_path, title, vote_average, release_date, overview } = movie
            return (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div className="carousel" >
                  <img src={`http://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
                </div>
                <div className="carousel_details">
                  <h1 className='carousel_title'>{title}</h1>
                  <div className="carousel_overly">
                    <p className='carousel_date'>{release_date} </p>
                    <p className='carousel_vote'>{vote_average}<i className="fas fa-star" /></p>
                  </div>
                  <div className="over"><p>{overview}</p></div>
                </div>
              </Link>
            )
          })}
        </Carousel>
      </section>

      <PopularMovie
        getMovieApi={getMovieApi}
        getTopMovie={getTopMovie}
        Movie={Movie}
        TopRated={TopRated}
      />
    </>
  )

}

export default Slider