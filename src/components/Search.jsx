import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'


function Search({ moviedata }) {

    console.log("moviedata--------", moviedata)


    return (
        <div className='home-container'>

            {moviedata ?
                Array.isArray(moviedata) && moviedata?.map((newData, key) => {
                    return (
                        <div key={key} className='home-cards'>
                            <Link to={`/movie_details/${newData.id}`}>{(newData.poster_path) ?
                                <img src={`https://image.tmdb.org/t/p/w500${newData.poster_path}`}></img> :
                                <img src='https://ih1.redbubble.net/image.533910704.5853/fposter,medium,wall_texture,product,750x1000.u3.webp'></img>
                            }</Link>
                            <p>{newData.title}</p>
                            <p>Rating: {newData.vote_average?.toFixed(1)}</p>
                        </div>
                    )
                }) : <Home />
            }



        </div>
    )
}

export default Search