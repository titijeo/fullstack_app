import {
    faClock

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
//import "./carItem.css";

const CarItem = ({item}) => {
    const [openCar, setOpenCar] = useState(false);



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
                    <h1 className="carIcon"><FontAwesomeIcon icon={faClock} /></h1>
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
                    <button className="carCheckButton"
                        onClick={() => setOpenCar(!openCar)}
                    >
                        Buy your ticket</button>
                </div>
            </div>
            {openCar && (<div className="carwhole">
                <div className="car">
                    <div className="colorSeat">
                        <div className="exit1">
                            <label>occupied-man</label>
                            <input className="colorSeat1"></input>
                        </div>
                        <div className="exit1">
                            <label>occupied-woman</label>
                            <input className="colorSeat2" ></input>
                        </div>
                        <div className="exit1">
                            <label>the one you chose</label>
                            <input className="colorSeat3" ></input>
                        </div>
                        <div className="exit1">
                            <label>free</label>
                            <input className="colorSeat4"></input>
                        </div>
                    </div>

                    <div className="cabinfusilage">
                        <ol className="carSeat">
                            <li className="row ">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <input type="checkbox" id="2A" />
                                        <label className="seat1" for="2A">2A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2B" />
                                        <label className="seat1" for="2B">2B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2C" />
                                        <label className="seat1" for="2C">2C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2D" />
                                        <label className="seat1" for="2D">2D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                </ol>
                            </li>
                            <li className="row row--3">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <input type="checkbox" id="3A" />
                                        <label for="3A">3A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3B" />
                                        <label for="3B">3B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3C" />
                                        <label for="3C">3C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3D" />
                                        <label for="3D">3D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3E" />
                                        <label for="3E">3E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3A" />
                                        <label for="3A">3A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3B" />
                                        <label for="3B">3B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3C" />
                                        <label for="3C">3C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3D" />
                                        <label for="3D">3D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3E" />
                                        <label for="3E">3E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>

                    <div className="cabinfusilage1">
                        <ol className="carSeat">
                            <li className="row row--1">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <input type="checkbox" id="1A" />
                                        <label className="seat1" for="1A">1A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1B" />
                                        <label className="seat1" for="1B">1B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1C" />
                                        <label className="seat1" for="1C">1C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" disabled id="1D" />
                                        <label className="seat1" for="1D">1E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1E" />
                                        <label className="seat1" for="1E">1E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1F" />
                                        <label className="seat1" for="1F">1F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1E" />
                                        <label className="seat1" for="1E">1E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1F" />
                                        <label className="seat1" for="1F">1F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1E" />
                                        <label className="seat1" for="1E">1E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1F" />
                                        <label className="seat1" for="1F">1F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1E" />
                                        <label className="seat1" for="1E">1E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1F" />
                                        <label className="seat1" for="1F">1F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1E" />
                                        <label className="seat1" for="1E">1E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1F" />
                                        <label className="seat1" for="1F">1F</label>
                                    </li>
                                </ol>
                            </li>
                            <li className="row row--2">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <input type="checkbox" id="2A" />
                                        <label className="seat1" for="2A">2A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2B" />
                                        <label className="seat1" for="2B">2B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2C" />
                                        <label className="seat1" for="2C">2C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2D" />
                                        <label className="seat1" for="2D">2D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label className="seat1" for="2E">2E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2F" />
                                        <label className="seat1" for="2F">2F</label>
                                    </li>
                                </ol>
                            </li>
                            <li className="row row--3">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <input type="checkbox" id="3A" />
                                        <label for="3A">3A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3B" />
                                        <label for="3B">3B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3C" />
                                        <label for="3C">3C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3D" />
                                        <label for="3D">3D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3E" />
                                        <label for="3E">3E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3A" />
                                        <label for="3A">3A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3B" />
                                        <label for="3B">3B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3C" />
                                        <label for="3C">3C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3D" />
                                        <label for="3D">3D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3E" />
                                        <label for="3E">3E</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3F" />
                                        <label for="3F">3F</label>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="chooseSeat">
                    <span>siège choisi</span>
                    <button>confirmez</button>
                </div>
            </div>
            )}

        </div >
    )
}

export default CarItem;