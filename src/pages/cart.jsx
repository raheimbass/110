import { useEffect, useState } from 'react';
import "./cart.css";
import DataService from '../services/dataService'

function Cart(){
    const [cart, setCart] = useState([]);

    // when the page loads
    useEffect(function () {
        let service = new DataService();
        let data = service.readCart();
        let products = data.items || []
        console.log(products);
        setCart(products);
    }, []);
    
    function clear(){
        let service = new DataService();
        service.clearCart();
        setCart({})
    };

    function getTotal(prod){
    let total = prod.price * prod.quantity;
            return total.toFixed(2);
    };

    function getOrderTotal(){
        let total= 0;
        for (let i=0; i< cart.length; i++){
            let prod = cart[i];
            total += prod.quantity * prod.price;
        }
        return total.toFixed(2);
    };


        // call the clearCart function on dataService
    

    return (
    <div className="cart">
    <h1>Ready to check out?</h1>
    <h3>We have{cart.length} ready for you!</h3>

        <div className="parent">
            <div className="prod">
                {cart.map((prod) => (
                    <div className="prod-cart">
                        <img src={"/img/" + prod.image} alt=""></img>
                        <h5>{prod.title}</h5>
                        <h6>{prod.price.toFixed(2)}</h6>
                        <h6>{(prod.quantity)}</h6>
                        <h6>${getTotal(prod)}</h6>
                    </div>
                ))}
            </div>
            <div className="side-menu">
                <h3>Total: ${getOrderTotal()}</h3>
                <button className="btn btn-primary">Pay</button>
                <button onClick={clear} className="btn btn-sm btn-danger">Clear cart</button>
            </div>
        </div>
    </div>

    )

}

export default Cart;
