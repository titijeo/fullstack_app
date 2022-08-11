import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}50m²</span>
        <span className="siTaxiOp">Service traiteur</span>
        <span className="siSubtitle">
          2e étage avec balcon
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          you can cancel later, so lock in this great price today! 
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">taxes et frais inclus</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Voir la chambre</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;