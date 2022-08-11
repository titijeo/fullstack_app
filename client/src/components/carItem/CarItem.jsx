import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
//import { SearchContext } from "../../context/SearchContext";
import "./carItem.css";

const CarItem = ({ item }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [openCar, setOpenCar] = useState(false);
  
 

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value ]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  console.log(selectedRooms)

  //const handleClick = () => {};
  

  return (
    <div>
      <div className="carItem">
        <div className="imgcar">
          <img
            src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-385997.jpg&fm=jpg"
            alt=""
            className="carImg"
          />
        </div>
        <div className="carHour">
          <h1 className="carIcon">
            <FontAwesomeIcon icon={faClock} />
          </h1>
          <span className="duration"> {item.hour}</span>
        </div>
        <div className="priceticket">
          <span className="ticket">5000fcfa</span>
        </div>
        <div className="priceticket">
          <span className="ticket">{item.depcity}</span>
        </div>
        <div className="priceticket">
          <span className="ticket">{item.arrcity}</span>
        </div>
        <div className="carDetailTexts">
          <button
            className="carCheckButton"
            onClick={() => setOpenCar(!openCar)}
          >
            Buy your ticket
          </button>
        </div>
      </div>
      {openCar && (
        <div className="carwhole">
          <div className="rSelectRooms">
            {item.seats.map((seat) => (
              <div className="room">
                <label>{seat.number}</label>
                <input 
                type="checkbox"
            
                  //value={seat._id}
                  value={seat.number}
                
                  onChange={handleSelect}
                  //disabled={!isAvailable(roomNumber)}
                
                />
                
               
              </div>
            ))}
          </div>
          <div className="chooseSeat">
            <span>siège choisi</span>
             {selectedRooms}
               
            <button className="rButton">
              confirmez
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarItem;
