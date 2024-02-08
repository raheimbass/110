import { useState, useEffect } from "react";
import "./admin.css";
import DataService from '../services/dataService';

function Admin() {
  const [usd, setUsd] = useState(0);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [allProducts, setAllproducts] = useState([]);

  // when the page loads, get the products
  useEffect(function(){
    let service = new DataService();
    let prods = service.getProducts();
  }, []);

  function apply() {
    console.log("Button clicked");
  }

  function handleInputChange(e) {
    // e = event information
    const value = e.target.value;
    setUsd(value);
  }

  function handleFirstChange(e) {
    const value = e.target.value;
    setFirst(value);
  }

  function handleLastChange(e) {
    const value = e.target.value;
    setLast(value);
  }


  return (
  <div className="admin">
    <h1>Admin Page</h1>
      <img src="/images/admin.png" alt=""></img>

        <div className="exchange">
          <h3>Exchange rate</h3>
          <label>USD:</label> <input onChange={handleInputChange} type="number" />

          <hr />
          <label>COP:</label> <label>{usd * 3912}</label> <br />
          <label>MXP:</label> <label>{usd * 16.87}</label>
          <hr />

          <button onClick={apply} className="btn btn-primary">
            Convert
          </button>
        </div>

          <div className="name">
            <h3>Full name</h3>
              <label>First name:</label> <input onChange={handleFirstChange} type="text" />
              <label>Last name:</label> <input onChange={handleLastChange} type="text" />
              <hr />
            <label>
            {first} {last}
            </label>
          </div>

  </div>
  );
}

export default Admin;
