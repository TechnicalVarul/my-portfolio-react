import React from 'react';
import './Blog.css';
import blog1 from './Images/blog-01.jpg';
import blog2 from './Images/blog-02.jpg';
import blog3 from './Images/blog-03.jpg';


function Blog() {
  return (
    <div className='blog component__space' id='Blog'>
      <div className='heading'>
        <h1 className='heading'> Latest News</h1>
        <p className='heading p__color'>I have made so many projects, but this the highlight of my best work.</p>
      </div>
      <div className='container'>
      <div className='row'>

<div className='col__3'>
    <div className='project_box pointer relative'>
        <div className='project_box_img pointer relative'>
            <div className='project_img_box'>
                <img src={blog1} alt='' className='project_img' />
            </div>
            <div className='mask_effect'></div>
        </div>
        <div className='project_meta absolute'>
            <h5 className='project_text'>Java</h5>
            <h4 className='project_text'>development</h4>
            <a href='' className='project_btn'>View Details</a>
        </div>
    </div>
</div>

<div className='col__3'>
    <div className='project_box pointer relative'>
        <div className='project_box_img pointer relative'>
            <div className='project_img_box'>
                <img src={blog2} alt='' className='project_img' />
            </div>
            <div className='mask_effect'></div>
        </div>
        <div className='project_meta absolute'>
            <h5 className='project_text'>Java</h5>
            <h4 className='project_text'>development</h4>
            <a href='#' className='project_btn'>View Details</a>
        </div>
    </div>
</div>

<div className='col__3'>
    <div className='project_box pointer relative'>
        <div className='project_box_img pointer relative'>
            <div className='project_img_box'>
                <img src={blog3} alt='' className='project_img' />
            </div>
            <div className='mask_effect'></div>
        </div>
        <div className='project_meta absolute'>
            <h5 className='project_text'>Java</h5>
            <h4 className='project_text'>development</h4>
            <a href='#' className='project_btn'>View Details</a>
        </div>
    </div>
</div>

</div>
      </div>
    </div>
  )
}

export default Blog;
