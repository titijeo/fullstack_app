import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./buyCarItem.css";

const BuyCarItem = ({item}) => {

  return (
    <div>
      <div className="buyItem">
        <img
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="buyImg"
        />
        <div className="buyDesc">
          <h1 className="buyTitle">{item.brand}</h1>
          <span className="buyTaxiOp">{item.price}</span>
          <span className="buyDistance">0 km au compteur</span>

          <span className="buySubtitle">couleur d'origine</span>
          <span className="buyFeatures">tous les papiers</span>
          <span className="buyCancelOp"> </span>
          <span className="buyCancelOpSubtitle">essaie gratuit</span>
        </div>
        <div className="buyDetails">
          <div className="buyDetailTexts">
          <Link to={`/buycar/${item._id}`}>
          <button className="buyCheckButton">Voir la voiture</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCarItem;
