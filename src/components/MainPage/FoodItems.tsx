import Items from "./Items"
import { useState, useEffect } from "react"
import { cartItem } from "../../Models/addtoCartModel"
// import { itemData } from "./itemdata"
import axios from 'axios'
const FoodItems = () => {

  const [cartList, setcartList] = useState<cartItem[]>([])
  useEffect(() => {
    console.log()
    getData()
  }, [])

  const addToItemsList = (item: cartItem) => {
    setcartList([...cartList, item])
  }
  const removeFromItemsList = (ID: number) => {
    setcartList((current) =>
      current.filter(item => item.id != ID)
    )
  }
  const getData = async () => {
    const data = await axios.get<cartItem[]>("http://localhost:3000/getCartItems")
    console.log(data.data)
    setcartList(data.data)
  }


  return (
    <div className="w-100% p-6 h-100% bg-white">
      <h1 className="text-black text-4xl ml-3">Delivery Restaurants in Dehradun</h1>
      <div className="flex flex-wrap p-11">
        {
          cartList.map((item, index) => {
            return (
              <Items addtocart={addToItemsList} removeFromCart={removeFromItemsList} itemData={item} key={index} index={index} />
            )
          })
        }
      </div>

    </div>
  )
}

export default FoodItems