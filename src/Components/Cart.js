import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../App.css";
import { removeCart, resetCart } from "../redux/action/counterActions";
import { useNavigate } from "react-router-dom";
import profile from "../image/profile.webp";




const Cart = () => {

    let newCartArr = useSelector(state => state);
    let [sum, setSum] = useState(0);
    let navigate = useNavigate();

    console.log(newCartArr, 'cart');

    let dispatch = useDispatch();

    function checkoutFunc(){

        alert("Items are Purchased");
        dispatch(resetCart())

        setTimeout(() => {
            navigate("/")
        }, 5000)
    }

    
       
useEffect(() => {
    if(newCartArr){
            

        let alteredSum = newCartArr.reduce((acc, each) => {
            return acc + each.price
        }, 0)

        setSum(alteredSum)

        
    }
},[newCartArr])
        

        
    

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
                <h1 className="our-pro">Your Cart </h1>
                <div className="check-cont">
                <h2>Total Price : <span className="sum">${sum}</span></h2>
                <button className="checkout" onClick={checkoutFunc}>Checkout</button>
                </div>
                
            </div>
            

            {
                newCartArr && newCartArr.length > 0 ?


                <div className="product-cont">
                  
                    {
                       
                        newCartArr.map((item) => (
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
                                
                                
                                <button onClick={() => dispatch(removeCart(item.id))} className="card-button">Remove From Cart</button>
                            </div>

                            
                        )

                        )
                   

                }
                </div>


                : 
                
                <div className="err-cont">

                        <p>No Items in your cart... </p>
                </div>
                

            }
    
                
    
            </div>
        )
}


export default Cart;