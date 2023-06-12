import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";
import { AiFillMail } from 'react-icons/ai';
import {IoIosHome, IoIosCall} from 'react-icons/io';
import {FaInfo} from 'react-icons/fa'


const Contact = () => {
  return (
    <>
      <MetaData title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.131368511687!2d5.6156825!3d6.32491855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a29f22316f%3A0x908edecf3ebfe8e8!2sEdo%20State%20Government%20Secretariat!5e0!3m2!1sen!2sng!4v1686568944233!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-o w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
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
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className="contact-title mb-4">Get in Touch With Us</h3>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center"><IoIosHome className="fs-5" />
                    <address className="mb-0">TTA:218 Port Neuveule Birmingham North London</address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center"><IoIosCall className="fs-5"/>
                    <a href="tel:+2348072345624">+23472345624</a></li>
                    <li className="mb-3 d-flex gap-15 align-items-center "><AiFillMail className="fs-5"/>
                    <a href="mailto:shoptire@gmail.com">shoptire@gmail</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center"><FaInfo className="fs-5"/>
                    <p className="mb-0">Monday - Friday 10 AM - 8 PM</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
