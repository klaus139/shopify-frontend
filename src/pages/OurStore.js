import React from "react";
import ReactStars from "react-rating-stars-component";
import { images } from "../constants";
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";

const OurStore = () => {
  return (
    <>
      <MetaData title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors px-0">
                      <li style={{ backgroundColor: "red" }}></li>
                      <li style={{ backgroundColor: "blue" }}></li>
                      <li style={{ backgroundColor: "green" }}></li>
                      <li style={{ backgroundColor: "yellow" }}></li>
                      <li style={{ backgroundColor: "purple" }}></li>
                      <li style={{ backgroundColor: "orange" }}></li>
                      <li style={{ backgroundColor: "pink" }}></li>
                      <li style={{ backgroundColor: "cyan" }}></li>
                      <li style={{ backgroundColor: "magenta" }}></li>
                      <li style={{ backgroundColor: "teal" }}></li>
                      <li style={{ backgroundColor: "gold" }}></li>
                      <li style={{ backgroundColor: "silver" }}></li>
                      <li style={{ backgroundColor: "brown" }}></li>
                      <li style={{ backgroundColor: "lime" }}></li>
                      <li style={{ backgroundColor: "navy" }}></li>
                      <li style={{ backgroundColor: "indigo" }}></li>
                      <li style={{ backgroundColor: "olive" }}></li>
                      <li style={{ backgroundColor: "salmon" }}></li>
                      <li style={{ backgroundColor: "turquoise" }}></li>
                      <li style={{ backgroundColor: "maroon" }}></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light py-2 px-3 text-secondary rounded-3">
                      Headphone
                    </span>
                    <span className="badge bg-light py-2 px-3 text-secondary rounded-3">
                      Laptop
                    </span>
                    <span className="badge bg-light py-2 px-3 text-secondary rounded-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src={images.headphone}
                      alt="headphone"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kids Headphones Bulk 10 Pack Multi Colored</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$100.00</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src={images.headphone}
                      alt="headphone"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kids Headphones Bulk 10 Pack Multi Colored</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$100.00</b>
                  </div>
                </div>
              </div>
             
            </div>
            <div className="col-9">
                <div className="filter-sort-grid">
                  <div className="d-flex justify-content-end align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    
                    <p className="mb-0">Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best selling</option>
                      <option value="title-descending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alhabetically, Z-A</option>
                      <option value="price-ascending">Pride, low to high</option>
                      <option value="title-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
