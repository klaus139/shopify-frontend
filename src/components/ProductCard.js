import React from "react";
import ReactStars from "react-rating-stars-component";
import { images } from "../constants";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="product-image">
          <img src={images.watch} alt="productimage" />
        </div>
        <div className="product-details">
          <h6 className="brands">Havels</h6>
          <h5 className="product-title">
            High performance smart watch in multi color
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className="d-flex flex-column">
                <Link><img src={images.love} alt="love" /></Link>
                <Link><img src={images.list} alt="list" /></Link>
                <Link><img src={images.view} alt="view" /></Link>
                <Link><img src={images.addcart} alt="cart" /></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
