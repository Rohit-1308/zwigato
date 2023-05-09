import * as image from "../../assets/images/homeImage.jpg";
import * as Indian_flag from "../../assets/images/Indian_flag.webp"
import "./Home.css";
import Location from "./Location";
const Home = () => {

  return (
    <>
      <div className="container">
        <img className="main-image" src={image.default} />
        <ul className="inner">
          <li>Add restaurant</li>
          <li>Log in</li>
          <li>Sign Up</li>
        </ul>
        <div className="text">
          <h1 className="font-extrabold">Zwigato</h1>

          <p>Find the best restaurants, cafés and bars in India</p>
        </div>
      </div>
      <div className="bottom-container">
        <h1 className="flex">Popular locations in   <img className="mx-2 mt-2" src={Indian_flag.default}/>    India</h1>
        <p>
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, Zomato covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </p>
        <div className="flex-container">
            <Location name="Agra Restaurant" />
            <Location name="Ahmedabad Restaurant"/>
            <Location name="Ajmer Restaurant"/>
            <Location name="Alappuza Restaurant"/>
            <Location name="Allahabad Restaurant"/>
            <Location name="Amravati Restaurant"/>
            <Location name="Amritsar Restaurant"/>
            <Location name="Sambhajinagar Restaurant"/>
            <Location name="Bengaluru Restaurant"/>
            <Location name="Bhopal Restaurant"/>
            <Location name="Bhubaneshwar Restaurant"/>
            <Location name="Chennai Restaurant"/>
            <Location name="Coimbatore Restaurant"/>
            <Location name="Cuttack Restaurant"/>
            <Location name="Darjeeling Restaurant"/>
            <Location name="Dehradun Restaurant"/>
            <Location name="Delhi NCR Restaurant"/>
            <Location name="Dharmashala Restaurant"/>
            <Location name="Gangtok Restaurant"/>
            <Location name="Goa Restaurant"/>
        </div>
      </div>
    </>
  );
};

export default Home;
