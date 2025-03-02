import Navbar from './components/Navbar'
import Home from './components/Home'
import Toprated from './components/Toprated'
import Upcoming from './components/Upcoming'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Cast from './components/Cast'
import Search from './components/Search'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/toprated',
      element: <><Navbar /><Toprated /></>
    },
    {
      path: '/upcoming',
      element: <><Navbar /><Upcoming /></>
    },
    {
      path: '/movie_details/:movie_id',
      element: <><Navbar /><HomePage /><Cast /></>
    },
    {
      path: '/search/:movieName',
      element: <><Navbar /><Search /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
