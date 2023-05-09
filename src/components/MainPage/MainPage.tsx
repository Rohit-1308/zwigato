import FoodItems from "./FoodItems"
// import Menu from "./Menu"
import Navbar from "./Navbar"

const MainPage = () => {
  return (
    <>
      <div className="bg-white h-screen w-screen">
        <Navbar />
        <p className="ml-60 text-xs text-gray-500">Home / India / Pune Restaurants</p>{/*TODO:add path from history of router*/}
        {/* <Menu /> */}
        <FoodItems />
      </div>


    </>
  )
}

export default MainPage