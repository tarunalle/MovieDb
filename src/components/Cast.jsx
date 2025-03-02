import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Cast() {

    const [data, setData] = useState([])
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
    const movie_id = useParams()

    useEffect(() => {
        async function api() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id.movie_id}/credits?api_key=${Api_key}&language=en-US`);
            setData(response.data.cast)
        }
        api();
    }, [])
    console.log("cast---------", data)

    return (
        <>
            <h1 id='h1'>Cast </h1>
            <div className='cast-container'>
                {
                    data.map((newData, key) => {
                        return (
                            <div key={key} className='cast-div'>
                                {(newData.profile_path) ?
                                    <img src={`https://image.tmdb.org/t/p/w500${newData.profile_path}`}></img> :
                                    <img src='https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'></img>
                                }
                                <p>{newData.name}</p>
                                <p>Character: {newData.character}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Cast