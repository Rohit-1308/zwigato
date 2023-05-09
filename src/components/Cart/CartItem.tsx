import { AiOutlineDelete } from 'react-icons/ai'
import { cartItem } from '../../Models/addtoCartModel'
import { itemData } from '../MainPage/itemdata'
import { useState } from "react"

const CartItem = (props: { cartItem: cartItem }) => {
    const [count, setcount] = useState(0)
    const { cartItem } = props
    return (
        <div className="m-4 w-2/5 hover:bg-blue-50  hover:scale-105 shadow-lg rounded-md hover:shadow-2xl hover:  flex flex-row  justify-evenly items-center  text-center transition ease-in-out delay-150">
            <img className="w-20 h-20 rounded-full mb-2 aspect-square" src={cartItem.img} />
            <div className='flex flex-col justify-start '>
                <span className="text-pink-700  rounded text-xl">{cartItem.pricedesc}</span>
                <h3 className="text-xl uppercase text-indigo-700 my-2">{cartItem.dish}</h3>

            </div>
            <div className='my-2 flex justify-end'>
                <button onClick={() => {
                    setcount(count + 1)
                }} className="add bg-green-500 hover:bg-green-700 rounded-full h-6 w-6 mx-1">+</button>
                <button className="text-black">{count}</button>
                <button onClick={() => {
                    if (count > 0) {
                        setcount(count - 1)
                    }
                }} className="Substract bg-red-500 rounded-full h-6 w-6 mx-1">-</button>
            </div>
            <button
                className="flex m-3 w-30 focus:outline-none rounded-xl p-3 focus:shadow-2xl hover:shadow-2xl hover:bg-red-200  transition ease-out duration-1000"
            >
                <span className="text-xl mr-1">
                    <AiOutlineDelete style={{ color: 'red' }} />
                </span>
                <span className="tracking-wider text-black">Remove</span>
            </button>
        </div>
    )
}

export default CartItem