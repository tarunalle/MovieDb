import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

function Upcoming() {

    const [data, setData] = useState([])
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";

    useEffect(() => {
        async function api() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`);
            setData(response.data.results)
        }
        api();
    }, [])

    console.log("Upcoming------", data)

    return (
        <div className='home-container'>
            {
                data.map((newData, key) => {
                    return (
                        <div key={key} className='home-cards'>
                            <Link to={`/movie_details/${newData.id}`}><img src={`https://image.tmdb.org/t/p/w500/${newData.poster_path}`}></img></Link>
                            <p>{newData.title}</p>
                            <p>Rating: {newData.vote_average?.toFixed(1)}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Upcoming