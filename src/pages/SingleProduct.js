/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { images } from "../constants";

const SingleProduct = () => {
    //const props = {width: 400, height: 250, zoomWidth: 500, img: {images.watch}};
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <MetaData title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
                <div className="main-product-image">
                    <div>
                    {/* ReactDOM.render(<ReactImageZoom {...props} />, document.getElementById('react-app')); */}
                    <ReactImageZoom
                    width={400}
                    height={250}
                    zoomWidth={600} // Adjust the zoom width to increase the area of magnification
                    img="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    zoomPosition="right" // Adjust the zoom position ('right', 'left', 'top', 'bottom') to change the area of magnification
                    zoomLensStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Adjust the zoom lens style as desired
                  />
                    </div>

                </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <h4>Description</h4>
              <div className="bg-white p-3">
                
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h4>Reviews</h4>
            <div className="col-12">
              <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
              <h4 className="mb-2">Write a Review</h4>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                </div>
                    
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
               <div className="d-flex gap-10 align-items-center">
                <h6 className="mb-0">Ahmed</h6>
                <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
               </div>
                    <p className="mt-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>

                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
