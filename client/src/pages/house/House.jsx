import {
    faBed,
    
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./house.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import BuyHouse from "../../components/buyHouse/BuyHouse";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";

const House = () => {

    const [query, setQuery] = useState("");
    const [queryt, setQueryt] = useState("");
   

    const { data, loading, error, reFetch } = useFetch(
        "http://localhost:8800/api/maison"
      );
    
      const handleClick = () => {
        reFetch();
      };
    


    
    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="house">
                <div className="houseSearch">
                    <div className="houseSearchItem">
                        <FontAwesomeIcon icon={faBed} className="houseIcon" />
                        <input
                            type="text"
                            placeholder="type"
                            className="houseSearchInput"
                            onChange={(e) => setQueryt(e.target.value)}
                        />
                    </div>
                    <div className="houseSearchItem">
                        <FontAwesomeIcon icon={faBed} className="houseIcon" />
                        <input
                            type="number"
                            placeholder="the price"
                            className="houseSearchInput"
                            onChange={(e) => setQuery(e.target.value)}
                           
                            
                        />
                    </div>
                    <div className="houseSearchItem">
                        <button className="houseBtn" onClick={handleClick}>
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
              .filter((db) => db.type.toLowerCase().includes(queryt) && db.price.toLowerCase().includes(query)) 
              .map((item) => (
                <BuyHouse item={item} key={item._id} />
              ))}
          </>
        )}

            </div>

            <div className="housemail">

                <MailList />
            </div>
            <div className="housefooter">

                <Footer />
            </div>

        </div>
    );
};

export default House;