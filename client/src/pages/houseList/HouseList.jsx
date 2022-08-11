import "./houseList.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const HouseList = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data , loading} = useFetch(
    "http://localhost:8800/api/maison"
  );

  const photos = [
    {
      src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="houseContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        {loading ? (
        "loading"
      ) : (<div className="houseWrapper">
          <button className="bookNow">Buy Now!</button>
          <h1 className="houseTitle">villa basse</h1>
          <div className="houseAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span></span>
          </div>
          <span className="houseDistance">
            Excellent location
          </span>
          <span className="housePriceHighlight">
            à proximité d'école, centre de sannté
          </span>
          <div className="houseImages">
            {photos.map((photo, i) => (
              <div className="houseImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="houseImg"
                />
              </div>
            ))}
          </div>
          <div className="houseDetails">
            <div className="houseDetailsTexts">
              <h1 className="houseTitle">Description du quartier</h1>
              <p className="houseDesc">
              La description d’une maison doit être vue comme la présentation d’un 
              journal télévisé. Elle débute par les grandes lignes avant de se poursuivre 
              par la description détaillée. Commencez donc par situer géographiquement la maison ; 
              indiquez la superficie du site de la propriété et éventuellement la superficie 
              de la maison en elle-même. Quel est le nombre de pièces ? Y a-t-il la présence 
              d’un jardin ? D’une piscine ? D’une terrasse ? Quel est le type d’architecture 
              de la maison (maison en bois contemporaine, villa, maison en béton contemporaine, 
              chalet, sur pilotis, etc.)
              </p>
            </div>
            <div className="houseDetailsPrice">
              <h1>!</h1>
              <span>
                TOUT EST COMPRIS ON VOUS FAIT UNE BONNE AFFAIRE 
              </span>
              <h2>
                <b> FCFA</b>
              </h2>
              <button>Buy Now!</button>
            </div>
          </div>
        </div>)}
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default HouseList;