import Navbar from '../MainPage/Navbar'
import CartItem from './CartItem'
import { itemData } from '../MainPage/itemdata'

const CartPage = () => {
    return (
        <div className="bg-white h-screen w-screen">
            <div className='fixed z-10 bg-white'>

                <Navbar />
            </div>
            <div className='w-screen f-full flex' >

                <div className="pl-10 mt-20 w-full min-h-fit flex-1 bg-white">
                    {
                        itemData.map((item,index)=>(
                            <CartItem cartItem={item} key={index}/>
                        ))
                    }
                </div>
                <div className="bg-red-200 scroll-m-0 text-black fixed top-20 right-3 w-5/12 h-4/5">
                    <h1 className='text-black text-center'>Payment Summary</h1>
                    fsafasdfasdf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laborum, facilis eius minus tempora fugiat quibusdam, sapiente, illo neque velit nostrum vel!
                </div>
            </div>
        </div>
    )
}

export default CartPage


