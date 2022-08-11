import "./car.css";
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

const Car = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?cs=srgb&dl=pexels-kelson-downes-1149137.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?cs=srgb&dl=pexels-kelson-downes-1149137.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=pexels-mike-b-116675.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?cs=srgb&dl=pexels-mike-b-810357.jpg&fm=jpg",
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
      <div className="hotelContainer">
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
        <div className="hotelWrapper">
          <button className="bookNow">Buy Now!</button>
          <h1 className="hotelTitle">Voiture 4x4</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>KORHOGO</span>
          </div>
          <span className="hotelDistance">
            kilométrage 5000km
          </span>
          <span className="hotelPriceHighlight">
            Tous les document au complet
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Description  de la voiture</h1>
              <p className="hotelDesc">
                La marque, le modèle, la cylindrée, le type de carburant ;
                Le nombre de portes ;
                Le kilométrage ;
                Le mois et l'année de mise en circulation ou le millésime ;
                La couleur ;
                Les équipements optionnels ;
                Premier propriétaire ou première main (si c'est le cas) ;
                Le bilan du contrôle technique ;
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Le prix</h1>
              <span>
                Une automobile est un véhicule à roues,
                motorisé et destiné au transport terrestre
                de quelques personnes et de leurs bagages.
              </span>
              <h2>
                <b>50000000 fcfa</b>
              </h2>
              <button> Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Car;