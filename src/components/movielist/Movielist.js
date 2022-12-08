import React, { useEffect, useState } from "react"
import "./Movielist.css"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"
import axios from "axios"

const Movielist = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${type?type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((response) => {
            setMovieList(response.data.results)
        });
    }

    return (
        <>
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
                <div class="card-group">
                        {
                            movieList.map(movie => (
                                <div className='col-lg-3 col-sm-6 col-12 card_p'>
                                <Card movie={movie} />
                                </div>
                            ))
                        }
                </div>
        </>
    )
}

export default Movielist;
