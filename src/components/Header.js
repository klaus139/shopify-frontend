import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';
import {images} from '../constants';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+2348072345624">
                  (+234) 080 723 456 24
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-xxl"></div>
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className="text-white mb-0 link">ShopTire</Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Product Here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className='header-upper-links d-flex align-items-center justify-content-between px-5'>
                <div>
                    <Link>
                    <img src={images.compare} alt="compare" />
                    <p>Compare <br /> Products</p>
                    </Link>
                </div>
                <div>
                    <Link>
                    <img src={images.wishlist} alt="wishlist" />
                    <p> Favorite <br /> wishlist</p>
                    </Link>
                </div>
                <div>
                    <Link>
                    <img src={images.user} alt="user" />
                    <p>Login <br /> My Account</p>
                    </Link>
                </div>
                <div>
                    <Link>
                    <img src={images.cart} alt="cart" />
                    <div className="d-flex flex-column">
                        <span className="badge bg-white text-dark">0</span>
                    </div>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
