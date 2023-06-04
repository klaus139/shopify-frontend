import React from 'react'
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import {images} from '../constants'

const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className='container-xxl'>
        <div className="row">
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img src={images.mainBanner1} className='img-fluid rounded-3' alt='mainbanner' />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>Samsung S23</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between gap-15 align-items-center">
            <div className='small-banner position-relative'>
              <img src={images.catbanner} className='img-fluid imgg rounded-3' alt='mainbanner' />
              <div className='small-banner-content position-absolute'>
                <h4>BEST SALE</h4>
                <h5>IPad S13+ Pro.</h5>
                <p>From $999.00 <br /> or $41.62/mo.</p>         
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src={images.catbanner2} className='img-fluid imgg rounded-3' alt='mainbanner' />
              <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>Buy IWatch Series</h5>
                <p>From $999.00 <br /> or $41.62/mo.</p>         
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src={images.catbanner3} className='img-fluid imgg rounded-3' alt='mainbanner' />
              <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>IPad Air 13 Series</h5>
                <p>From $999.00 <br /> or $41.62/mo.</p>         
              </div>
            </div><div className='small-banner position-relative'>
              <img src={images.catbanner4} className='img-fluid imgg rounded-3' alt='mainbanner' />
              <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>SONY HEADSET</h5>
                <p>From $999.00 <br /> or $41.62/mo.</p>         
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                <img src={images.services} alt="services" />
                <div>
                  <h6> Free Shipping</h6>
                  <p className='mb-0'>From all orders over $500</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={images.services2} alt="services" />
                <div>
                  <h6>Daily Surpirse  Offers</h6>
                  <p className='mb-0'>Save up to 25% off</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={images.services3} alt="services" />
                <div>
                  <h6>Support 24/7 </h6>
                  <p className='mb-0'>Shop with an expert</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={images.services4} alt="services" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory default price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src={images.services5} alt="services" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% Protected Payment</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src={images.camera} alt="camera" />
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10 Items</p>
              </div>
              <img src={images.tv} alt="tv" />
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Music</h6>
                <p>10 Items</p>
              </div>
              <img src={images.headphone} alt="headphones" />
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Music</h6>
                <p>10 Items</p>
              </div>
              <img src={images.speaker} alt="speaker" />
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Game Controllers</h6>
                <p>10 Items</p>
              </div>
              <img src={images.game} alt="controller" style={{width:"90px", height: "70px"}}/>
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Android Smart Phones</h6>
                <p>10 Items</p>
              </div>
              <img src={images.s23} alt="samsung"  />
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Apple Smart Phones</h6>
                <p>10 Items</p>
              </div>
              <img src={images.iphone} alt="iphone"   />
            </div>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Smart Watch</h6>
                <p>10 Items</p>
              </div>
              <img src={images.smartowatch} alt="speaker"  />
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src={images.brand1} alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src={images.brand2} alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src={images.brand3} alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src={images.brand4} alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src={images.brand5} alt='brand' />
              </div>
               <div className='mx-4 w-25'>
                <img src={images.brand6} alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src={images.brand7} alt='brand' />
              </div>
            </Marquee>
            
          </div>
        </div>
        </div>
       
      </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
        
        </div>
      </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
         <BlogCard />
         <BlogCard />
         <BlogCard />
         <BlogCard />
        </div>
      </div>
    </section>
    </>
  )
}

export default Home