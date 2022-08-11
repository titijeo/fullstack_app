
import { Link } from "react-router-dom";
import "./buyHouse.css";

const BuyHouse = ({item}) => {

  return (
    <div className="buyHouseItem">
      <img
        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="buyHouseImg"
      />
      <div className="buyHouseDesc">
        <h1 className="buyHouseTitle">{item.type}</h1>
        <span className="buyHouseTaxiOp">le quartier est deservie en voirie</span>
        <span className="buyHouseDistance">500m² à cocody</span>
        <span className="buyHouseSubtitle">
          maison avec jardin et une douche visiteur
        </span>
        <span className="buyHouseFeatures">
          cuisine • 3 chambres de 21m² chacune
        </span>
        <span className="buyHouseCancelOp">les frais du notaire gratuit </span>
        <span className="buyHouseCancelOpSubtitle">
          {item.price}
        </span>
      </div>
      <div className="buyHouseDetails">
        <div className="buyHouseDetailTexts">
        <Link to={`/house/${item._id}`}>
          <button className="buyCheckButton">Voir la maison</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyHouse;