import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


function HomePage() {

    const [data, setData] = useState([])
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
    const movie_id = useParams()


    useEffect(() => {
        async function api() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id.movie_id}?api_key=${Api_key}&language=en-US`)
            setData(response.data)

        }
        api();
    }, [])

    const rate = data?.vote_average
    const rate2 = rate?.toFixed(1)

    console.log("Home page -----", data)





    return (
        <>

            <div className=' details-page'>
                {/* <Link to="/"><p>Back</p></Link> */}
                <div className='details-container'>
                    <div className='first-div'>
                        <div className='first-a-div'>

                            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}></img>

                            <div className='first-aa-div'>
                                <h1>{data.original_title}</h1>
                                <h4 id='h4'>Rating: {rate2}</h4>
                                <h4>Release date: {data.release_date}</h4>
                            </div>
                        </div>
                        <div className='first-b-div'>

                            <p>{data.overview}</p>
                        </div>
                    </div>
                    <div className='second-div'>
                        <img className='backdrop-img' src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage