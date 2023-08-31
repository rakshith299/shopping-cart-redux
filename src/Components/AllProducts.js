import axios from "axios";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import "../App.css";
import { addToCart } from "../redux/action/counterActions";
import { useNavigate } from "react-router-dom";
import profile from "../image/profile.webp"

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    

    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        async function getProducts(){
            await axios.get("https://dummyjson.com/products")
            .then((response) => setProducts(response.data.products))
            .catch((error) => console.log(error))
        }

        getProducts()
    }, [])

    function viewCart(){
        
        setTimeout(() => {
            navigate("/cart")
        }, 1000)
    }

    function getToHome(){
        
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }
    
    console.log(products);
    return(
        <div className="whole"> 
        <nav className="nav">
            <div>
                <h1 className="h1">Shopify</h1>
            </div>

            <div className="span-cont">
                <span className="span" onClick = {getToHome}>Home</span>
                <span className="span" onClick={viewCart} >Cart</span>
                <img src = {profile} alt = "profile" className="profile"/>
            </div>
        </nav>


        <div className="h-cont">
        <h1 className="our-pro">Our Products </h1>
        </div>
        

            <div className="product-cont">
                {
                    products.map((item) => (
                        <div className="card" key = {item.id}>
                            <img src = {item.images[0]} alt = "pic" className="card-pic"/>
                            <h1>{item.title}</h1>

                            <div className="price-cont">
                                <div>
                                    <h4 >brand:<span className="brand">{item.brand}</span></h4>
                                    <h4 >caregory: <span className="brand">{item.category}</span></h4>
                                </div>

                                <div>
                                    <h2 className="price">${item.price}</h2>
                                </div>
                            </div>
                            
                            
                            <button onClick={() => dispatch(addToCart(item))} className="card-button">Add to Cart</button>
                        </div>
                    )
                    )
                }
            </div>

        </div>
    )
}


export default AllProducts;