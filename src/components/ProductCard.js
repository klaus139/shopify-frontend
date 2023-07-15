import React from "react";
import ReactStars from "react-rating-stars-component";
import { images } from "../constants";
import { Link, useLocation } from "react-router-dom";
import {IoIosGitCompare} from 'react-icons/io'

const ProductCard = (props) => {
  let location = useLocation();
  const {grid} = props
  

  return (
    <><div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
      <Link  to=':id' className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent"><img src={images.love} alt="wish" /></button>
        </div>
        <div className="product-image">
          <img src={images.watch} alt="productimage" className="img-fluid" />
          <img src={images.watch1} alt="productimage" className="img-fluid" style={{ width: "250px", height: "250px" }} />
        </div>
        <div className="product-details">
          <h6 className="brands">Havels</h6>
          <h5 className="product-title">
            High performance smart watch in multi color
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`} >Introducing the epitome of elegance and innovation: the stunning smartwatch that seamlessly blends style with cutting-edge technology. This sleek timepiece features a vibrant, high-resolution display that captivates with its crystal-clear clarity and brilliant colors.</p>
          <p className="price">$100</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className="d-flex flex-column gap-10">

          <button className="border-0 bg-transparent">
                <IoIosGitCompare style={{color:"black", width:"20px", height:"20px"}} />
              </button>
            <button className="border-0 bg-transparent"><img src={images.view} alt="view" /></button>
            <button className="border-0 bg-transparent"><img src={images.addcart} alt="cart" /></button>
          </div>
        </div>
      </Link>
    </div><div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent"><img src={images.love} alt="wish" /></button>
          </div>
          <div className="product-image">
            <img src={images.watch} alt="productimage" className="img-fluid" />
            <img src={images.watch1} alt="productimage" className="img-fluid" style={{ width: "250px", height: "250px" }} />
          </div>
          <div className="product-details">
            <h6 className="brands">Havels</h6>
            <h5 className="product-title">
              High performance smart watch in multi color
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700" />
              <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              Introducing the epitome of elegance and innovation: the stunning smartwatch that seamlessly blends style with cutting-edge technology. This sleek timepiece features a vibrant, high-resolution display that captivates with its crystal-clear clarity and brilliant colors.
              </p>
            <p className="price">$100</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className="d-flex flex-column gap-10">

            <button className="border-0 bg-transparent">
                <IoIosGitCompare style={{color:"black", width:"20px", height:"20px"}}/>
              </button>
              <button className="border-0 bg-transparent"><img src={images.view} alt="view" /></button>
              <button><img src={images.addcart} alt="cart" /></button>
            </div>
          </div>
        </Link>
      </div></>
  );
};

export default ProductCard;
