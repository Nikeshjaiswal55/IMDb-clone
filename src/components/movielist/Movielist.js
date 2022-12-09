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
            <h2 className="list__title text-center">{(type ? type : "POPULAR").toUpperCase()}</h2>
                <div class="container">
                    <div className="row justify-content-around">
                        {
                            movieList.map(movie => (
                                <div className='col-lg-3 col-md-6 col-12 card_p mb-5'>
                                <Card movie={movie} />
                                </div>
                            ))
                        }
                    </div>
                </div>
        </>
    )
}

export default Movielist;
