/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';
import {images} from '../constants'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src={images.newsLetter} alt="newsletter" />
              <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
              <input
                type="text"
                className="form-control py-1"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
      </div>
    </div>

    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">Hno: 227 Ajah Victoria Island,
                <br /> Lagos, Nigeria
              </address>
              <a href="tel:+2348072345624" className="mt-2 d-block mb-2 text-white">+2348072345624</a>
              <a href="mailto:shoptire@gmail.com" className="mt-4 d-block mb-2 text-white">shoptire@gmail.com</a>
              <div className="social_icons d-flex align-items-center gap-30">
                <a href="#"><BsLinkedin className="text-white fs-4" /></a>
                <a href="#"><BsInstagram className="text-white fs-4"/></a>
                <a href="#"><BsGithub className="text-white fs-4"/></a>
                <a href="#"><BsYoutube className="text-white fs-4"/></a>
              </div>
            </div>
          </div>
          <div className="col-3">
          <h4 className="text-white mb-4">Information</h4>
          <div className="footer-link d-flex flex-column">
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link to="/terms-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
              <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className="col-3">
          <h4 className="text-white mb-4">Account</h4>
          <div className="footer-link d-flex flex-column">
              <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
              
            </div>
          </div>
          <div className="col-2">
          <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">HeadPhones</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
    <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by klaustexh</p>
        </div>
      </div>
      </div>
    </footer>
    </>
  )
}

export default Footer