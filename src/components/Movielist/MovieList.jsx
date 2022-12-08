import React from 'react'
import Slider from 'react-slick'
import {useSelector} from "react-redux";
import { getAllMovies,getAllShows } from '../../features/movies/MovieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.scss"
const MovieList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive:[
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots:true,
        },
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots:true,
        },
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:true,
        },
      },
    ]
  };
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies  = "";
  let renderShows  = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  console.log("hello")
  console.log(movies)
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
          </div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <div className="shows-container">
          <Slider {...settings}>{renderShows}</Slider>
          </div>
      </div>
    </div>
  )
}

export default MovieList