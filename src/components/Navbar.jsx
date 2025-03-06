import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import axios from 'axios';
import Search from './Search';
import Home from './Home';
import { useDispatch } from "react-redux";
import { setPageNo } from "../redux/pageSlice";


function Navbar() {

    const dispatch = useDispatch();
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";

    const [movieName, setMovieName] = useState("")

    const handlegetmoviename = (value) => {
        {
            setMovieName(value)
        }
    }

    const getallmovies = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movieName}&page=1`)
        setMovieName(response?.data?.results)
    }

    useEffect(() => {
        getallmovies();
    }, [])

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='navbar'>
                <div className='nav-1'>
                    <h4 className='logo'>MovieDb</h4>
                    <Link to="/" ><p className='p' onClick={() => dispatch(setPageNo(1))}>Popular</p></Link>
                    <Link to="/toprated"><p className='p' onClick={() => dispatch(setPageNo(1))}>Top Rated</p></Link>
                    <Link to="/upcoming"><p className='p' onClick={() => dispatch(setPageNo(1))}>Upcoming</p></Link>
                </div>
                <div className='nav-2'>

                    <input
                        type='text'
                        onChange={(e) => handlegetmoviename(e.target.value)}
                    />
                    <Link to="/search/movieName"><button
                        onClick={movieName ? getallmovies : console.log("hoo")}

                    >
                        Search
                    </button>
                    </Link>
                    <FaBars className='icon' onClick={toggleMenu} />

                </div>


            </div >

            {menuOpen ? (
                <div className=' media'>
                    <Link to="/"><p className=' text-gray-300 text-2xl'>Popular</p></Link>
                    <Link to="/toprated"><p className=' text-gray-300 text-2xl'>Toprated</p></Link>
                    <Link to="/upcoming"><p className=' text-gray-300 text-2xl'>Upcoming</p></Link>
                </div>
            ) : <div></div>}

        </>
    )
}

export default Navbar

