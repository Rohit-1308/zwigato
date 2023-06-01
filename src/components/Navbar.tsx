import './navbar.css'
import { IoLocationSharp } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { BsCartFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartItem } from '../Models/addtoCartModel'


const Navbar = () => {
    const [gotocart, setgotocart] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {

        if (gotocart == true) {
            navigate('/cart', { replace: false })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gotocart])
    return (
        <div className="flex w-screen justify-center py-3 bg-white">
            <h1 className="text-3xl font-extrabold text-black mr-10 mt-2">Zwigato</h1>
            <div className="flex min-w-fit justify-center gap-x-5 search-bar rounded-lg px-2">
                <div className="input-container">

                </div>
                <IoLocationSharp style={{ color: 'red' }} size={30} className="inline my-3 max-h-7" />
                <input className=" bg-white w-32  focus:outline-none text-black " placeholder="Pune"></input>
                <div className='divider'></div>
                <CiSearch style={{ color: 'grey' }} size={30} className="inline my-3 max-h-7" />
                <input className="bg-white  w-80 focus:outline-none text-black" placeholder="Search for restaurant, cuisine or a dish"></input>
            </div>
            <button className='mx-10 min-w-max text-gray-500 bg-white'>
                Log in
            </button>
            <button className='mx-10 min-w-max text-gray-500 bg-white'>
                Sign Up
            </button>
            <button onClick={() => {
                setgotocart(true)
            }} className='mx-10 min-w-max text-gray-500 bg-white'>
                <BsCartFill size={30} className="hover:h-11 w-11 transition-all ease-in-out delay-100" />
            </button>


        </div>
    )
}

export default Navbar