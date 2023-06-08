import React from "react";
import ReactStars from "react-rating-stars-component";
import { images } from "../constants";
import { Link, useLocation } from "react-router-dom";

const ProductCard = () => {
  let location = useLocation();
  alert(location)

  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src={images.love} alt="wish" /></Link>
        </div>
        <div className="product-image">
          <img src={images.watch} alt="productimage" className="img-fluid"/>
          <img src={images.watch1} alt="productimage" className="img-fluid"style={{width:"250px", height: "250px"}} />
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
            activeColor="#ffd700"
          />
          <p className="price">$100</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className="d-flex flex-column gap-10">
                
                <Link><img src={images.list} alt="list" /></Link>
                <Link><img src={images.view} alt="view" /></Link>
                <Link><img src={images.addcart} alt="cart" /></Link>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
