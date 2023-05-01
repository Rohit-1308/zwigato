import Home from './components/Home/Home'
import MainPage from './components/MainPage/MainPage';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
 
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      {/* <Home/> */}
      <Routes>
        <Route   path='/' element={<Home/>}/>
        <Route path='/landingPage' element={<MainPage/>}/>
          
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
