import React from 'react';
import { images } from '../constants';

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src={images.blog1} className='img-fluid' alt='blog' />
            </div>
        </div>

    </div>
  )
}

export default BlogCard