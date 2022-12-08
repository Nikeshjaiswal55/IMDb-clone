import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./Movie.css"

const Movie = () => {
    const [moviedetail, setMoviedetail] = useState();
    const { id } = useParams();
    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])
    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((response) => {
            setMoviedetail(response.data)
        });
    }
    return (
        <>
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${moviedetail ? moviedetail.backdrop_path : ""}`} />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div>
                            <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${moviedetail ? moviedetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{moviedetail ? moviedetail.original_title : ""}</div>
                            <div>{moviedetail ? moviedetail.tagline : ""}</div>
                            <div className="movie__rating">
                                {moviedetail ? moviedetail.vote_average : ""} <i class="fas fa-star" />
                                <span className="movie__voteCount">{moviedetail ? "(" + moviedetail.vote_count + ") votes" : ""}</span>
                            </div>
                        </div>
                        <div className="movie__runtime">{moviedetail ? moviedetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{moviedetail ? "Release date: " + moviedetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                moviedetail && moviedetail.genres
                                    ?
                                    moviedetail.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{moviedetail ? moviedetail.overview : ""}</div>
                        </div>
                    </div>
                </div>
                <div className="movie__links">
                            <div className="movie__heading">Useful Links</div>
                            {
                                moviedetail && moviedetail.homepage && <a href={moviedetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage </span></p></a>
                            }
                            {
                                moviedetail && moviedetail.imdb_id && <a href={"https://www.imdb.com/title/" + moviedetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb</span></p></a>
                            }
                        </div>
            </div>
        </>
    );
};

export default Movie;