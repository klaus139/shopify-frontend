import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import MetaData from "../components/MetaData";
import { images } from '../constants';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi'
const SingleBlog = () => {
  return (
    <>
     <MetaData title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='single-blog-card'>
                <Link to="/blogs" className='d-flex align-items-center gap-10'> <HiOutlineArrowLeft className='fs-4'/>Go back to Blogs</Link>
                <h3  className='title'>
                  A Beautiful sunday morning Renaissance
                </h3>
                <img src={images.blog1} alt='blogimage' />
                <p>bla bla bla bla bla bla bla bla bla v bla bla bla bla bla bla bla bla bla  blablablablablavblavvvvvvblavvvvvvvblablavvvblabla bla</p>
              </div>
              
             
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  )
}

export default SingleBlog