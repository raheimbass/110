import DataService from '../services/dataService';
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(function () {
    console.log("hello Im a product");
  }, []);

  function add() {
    console.log("add clicked");


    let prodWithQuantity = {
      ...props.data,
      quantity: quantity
    };

    var service = new DataService();
    service.addProdToCart(prodWithQuantity);
  }

  function quantityChange(qty) {
    console.log("quantity changed", qty);
    setQuantity(qty);
  }

  return (
  <div className="product">
    {/* they key is concatenate */}
      <img src={"/images/" + props.data.image} alt=""></img>
        <h5>{props.data.title}</h5>
          <div className="prices">
            <label>Price {props.data.price.toFixed(2)}</label>
            <label>Total: ${(props.data.price * quantity).toFixed(2)}</label>
          </div>
          
            <QuantityPicker onChange={quantityChange}/>
            <button onClick={add} className="btn btn-primary">Add</button>
  </div>
  );
}

export default Product;
