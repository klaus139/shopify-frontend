import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
   
        <div className='blog-card'>
            <div className='card-image'>
                <img src={images.blog1} className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 June 2023</p>
                <h5 className='title'>A Nice Way To Start Your Day</h5>
                <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <Link to="/blog/:id" className="bloglink" >Read More</Link>
            </div>
        </div>

    
  )
}

export default BlogCard