import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./buyCar.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import BuyCarItem from "../../components/buyCarItem/BuyCarItem";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const BuyCar = () => {
  const [query, setQuery] = useState("");
  const [queryt, setQueryt] = useState("");

  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:8800/api/voiture"
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="buycar">
        <div className="buySearch">
          <div className="buySearchItem">
            <FontAwesomeIcon icon={faBed} className="buyIcon" />
            <input
              type="text"
              placeholder="brand"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="buySearchInput"
            />
          </div>
          <div className="buySearchItem">
            <FontAwesomeIcon icon={faBed} className="buyIcon" />
            <input
              type="number"
              placeholder="price"
              className="buySearchInput"
              onChange={(e) => {
                setQueryt(e.target.value);
              }}
              
            />
          </div>
          <div className="buySearchItem">
            <button className="buyBtn" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="listResult">
        {loading ? (
          "loading"
        ) : (
          <>
            {data
              .filter((db) => db.brand.toLowerCase().includes(query)&& db.price.toLowerCase().includes(queryt))
              .map((item) => (
                <BuyCarItem item={item} key={item._id} />
              ))}
          </>
        )}
      </div>

      <div className="buymail">
        <MailList />
      </div>
      <div className="buyfooter">
        <Footer />
      </div>
    </div>
  );
};

export default BuyCar;
