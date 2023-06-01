import FoodItems from "./FoodItems"
import { useEffect } from 'react'
const MainPage = () => {

  useEffect(() => {

    window.scrollTo(0, 0)
  }, [])



  return (
    <>
      <div className="w-screen align-top parent mt-2">
        <p className="ml-60 text-xs text-gray-500">Home / India / Pune Restaurants</p>{/*TODO:add path from history of router*/}
        <FoodItems />
      </div>


    </>
  )
}

export default MainPage