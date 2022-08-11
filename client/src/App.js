

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BuyCar from "./pages/buyCar/BuyCar";
import Car from "./pages/car/Car";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import House from "./pages/house/House";
import HouseList from "./pages/houseList/HouseList";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import TravelCar from "./pages/travelCar/TravelCar";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/travelcar" element={<TravelCar/>}/>
        <Route path="/buycar" element={<BuyCar/>}/>
        <Route path="/buycar/:id" element={<Car/>}/>
        <Route path="/house" element={<House/>}/>
        <Route path="/house/:id" element={<HouseList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
