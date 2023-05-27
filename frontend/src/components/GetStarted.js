import React, { useState } from "react";
import "../css/Index.css";
import ProductDetails from "./productDetails";
import user from '../utils/img/user.png';
import { useLocation , useNavigate } from "react-router";
import Profile from "./Profile";
const GetStarted = () => {
  const [isCrossed , setisCrossed] = useState(false)
  const toggleCross = ()=>{
    setisCrossed(!isCrossed)
  }
  const location = useLocation();
  console.log(location);
  return ( 
    <>
   <div className="main-getStarted-container">
   <Profile></Profile>
    <div className="main-shop-container">
      
        <div className="shop-heading">
          <p>Add a product</p>
          <h1>On Respective websites</h1>
        </div>

        <div className="shop-options-div">
          <div onClick={toggleCross} className="shopify shop">
            <div className="shop-img shopify-img"></div>

            <h1>Shopify</h1>
            <p>
              Shopify is a user-friendly e-commerce platform that helps small
              businesses build an online store
            </p>
            <button className="add-shop-btn">Add</button>

            <div className="shop-shadow"></div>
          </div>
          <div className="shopify shop">
            <div className="shop-img wordpress-img"></div>
            <h1> Wordpress</h1>{" "}
            <p>
              WordPress is a content management system (CMS) that allows you to
              host and build websites.
            </p>
            <button className="add-shop-btn">Add</button>
            <div className="shop-shadow"></div>
          </div>
          <div className="shopify shop">
            <div className="shop-img magento-img"></div>
            <h1>Magento</h1>

            <p>
              Magento is now Adobe Commerce. Build multichannel experiences for
              B2B and B2C customers on a single eCommerce platform.
            </p>
            <button className="add-shop-btn">Add</button>
            <div className="shop-shadow"></div>
          </div>
        </div>
      </div> 
    </div>  {isCrossed ? <ProductDetails state = {location.state} toggleCross ={toggleCross}></ProductDetails> :<></> }
    
    
     
    </>
  );
};

export default GetStarted;
