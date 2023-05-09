import Items from "./Items"
import { useState, useEffect } from "react"
import { cartItem } from "../../Models/addtoCartModel"
import { itemData } from "./itemdata"
const FoodItems = () => {

  const [itemsList, setItemsList] = useState<cartItem[]>(itemData)
  useEffect(() => {
    console.log("updated")
    localStorage.setItem("cartitems",itemsList.toString())
  }, [itemsList])

  const addToItemsList = (key: number) => {
    console.log("sfasdf")
    const temparray: cartItem[] = itemsList
    console.log(`before update ${temparray[key].count}`)
    temparray[key].count++;
    console.log(`after update ${temparray[key].count}`)
    console.log({ itemsList })
    setItemsList(temparray)
  }

  return (
    <div className="w-100% p-6 h-100% bg-white">
      <h1 className="text-black text-4xl ml-3">Delivery Restaurants in Dehradun</h1>
      <div className="flex flex-wrap p-11">
        {
          itemsList.map((item, index) => {
            return (
              <Items addtocart={addToItemsList} itemData={item} key={index} index={index} />
            )
          })
        }
      </div>

    </div>
  )
}

export default FoodItems