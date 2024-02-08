let catalog = [
    {
        "title": "Orange",
        "category":"fruit",
        "price":45.00,
        "image": "oranges.jpeg",
        "_id": "1",
    },
    {
        "title": "Milk",
        "category":"farm",
        "price":45.00,
        "image": "milk.jpeg",
        "_id": "2",
    },
    {
        "title": "Banana",
        "category":"fruit",
        "price":45.00,
        "image": "banana.png",
        "_id": "3",
    },
    {
        "title": "Chesse",
        "category":"farm",
        "price":45.00,
        "image": "chesse.png",
        "_id": "4",
    },
    {
        "title": "Hoodie",
        "category":"Merchandise",
        "price":45.00,
        "image": "hoodie.jpeg",
        "_id": "5",
    },
    {
        "title": "Vitamins",
        "category":"Merchandise",
        "price":45.00,
        "image": "vitamins.png",
        "_id": "6",
    },
    {
        "title": "Coffee",
        "category":"Merchandise",
        "price":45.00,
        "image": "coffee.png",
        "_id": "7",
    }, 
    
];

class DataService
{
    getProducts()
    {
        return catalog;
    }

    addProdToCart(product){
        let cart = this.readCart();

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    readCart() {
        const cartString = localStorage.getItem("cart"); // string

        // parse the string to an array
        if(cartString) {
            return JSON.parse(cartString)
        } else {
            return []; //empty cart
        }
    }

    clearCart(){
        localStorage.setItem("cart", "");
    }
}

export default DataService;