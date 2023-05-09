import { MdShowChart } from 'react-icons/md'
import { cartItem } from '../../Models/addtoCartModel';
import { useState } from 'react';
import { IoCartOutline, IoCartSharp } from 'react-icons/io5'
const Items = (props: { index: number, itemData: cartItem, addtocart: (key: number) => any }) => {
    const [pushed, setPushed] = useState(false)
    // const cartitemContext=useContext(CartContext)
    return (
        <div className="text-black min-w-min max-w-sm h-15  p-2 rounded-lg hover:shadow-lg hover:border m-6" >
            <img src={props.itemData.img} className=" h-64 rounded-xl" />
            <div className="flex justify-between mt-2 w-96">
                <h1 className="text-lg inline">{props.itemData.dish}</h1>

                <p className="w-12 rounded-lg pl-1 h-5 align-middle  bg-green-600 text-white text-sm">{props.itemData.rating} &#9733;</p>

            </div>

            <div className="flex justify-between w-96 mt-2  ">
                <p className="font-extralight text-base">{props.itemData.dishdesc}</p>

                <p className="font-extralight text-sm">&#x20B9; {props.itemData.pricedesc}</p>

            </div>
            <hr className="mt-3 w-96 border-t-2 bg-gray-800 opacity-100 dark:opacity-50" />
            <div className="flex justify-between space-x-3 w-96 mt-1 my-3">
                <div className="bg-gray-400 w-fit h-fit rounded-full p-1">
                    <MdShowChart className="" />
                </div>
                <p className="text-sm font-light text-gray-500 mt-1">{props.itemData.history}</p>
                <div className='my-2 flex justify-self-end transition-all ease-linear' onClick={() => {
                    setPushed(!pushed)
                    if(!pushed){
                        props.addtocart(props.index)
                    }
                }}>

                    {(!pushed) ? <IoCartOutline size={30} /> : <IoCartSharp size={30} />}

                </div>
            </div>
        </div>
    );
};
export default Items;