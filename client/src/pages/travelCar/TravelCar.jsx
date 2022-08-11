import { faBed, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./travelCar.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import Navbar from "../../components/navbar/Navbar";
import CarItem from "../../components/carItem/CarItem";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";

const TravelCar = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [query, setQuery] = useState("");
  const [queryt, setQueryt] = useState("");

  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:8800/api/travelcar"
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="travel">
        <div className="travelSearch">
          <div className="travelSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="ville de depart"
              className="travelSearchInput"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="travelSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="ville darrivéé?"
              className="travelSearchInput"
              onChange={(e) => setQueryt(e.target.value)}
            />
          </div>
          <div className="travelSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="price"
              className="travelSearchInput"
            />
          </div>
          <div className="travelSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="travelSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} `}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>

          <div className="travelSearchItem">
            <button className="travelBtn" onClick={handleClick}>
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
              .filter((db) => db.depcity.toLowerCase().includes(query) && db.arrcity.toLowerCase().includes(queryt))
              .map((item) => (
                <CarItem item={item} key={item._id} />
              ))}
          </>
        )}
      </div>
      <div className="titi">
        <div className="travelmail">
          <MailList />
        </div>
        <div className="travelfooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TravelCar;
