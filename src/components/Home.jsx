import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Pages from './Pages'

function Home() {

    const [data, setData] = useState([])
    const pageNo = useSelector((state) => state.pagination.pageNo);
    console.log('pageno===', pageNo)

    const Api_key = "c45a857c193f6302f2b5061c3b85e743";


    useEffect(() => {
        async function api() {

            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${pageNo}`);
            setData(response.data.results)

        }
        api();
    }, [pageNo])

    console.log("Home------", data)

    return (
        <>
            <div className=' flex flex-col '>

                <div className='home-container'>
                    {

                        data.map((newData, key) => {

                            return (
                                <div key={key} className='home-cards'>

                                    <Link to={`/movie_details/${newData.id}`}><img src={`https://image.tmdb.org/t/p/w500${newData.poster_path}`}></img></Link>
                                    <p >{newData.title}</p>
                                    <p className='title'>Rating: {newData.vote_average?.toFixed(1)}</p>
                                </div>
                            )
                        })
                    }


                </div>
                <div className='pages-container'>
                    <Pages />
                </div>
            </div>

        </>
    )
}

export default Home