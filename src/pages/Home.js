import React from 'react'
import {Link} from "react-router-dom";
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
                <p>From $999.00or $41.62/mo.</p>
                <Link>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home