import React from 'react';
import './Project.css';
import project1 from './Images/portfolio-1.jpg';
import project2 from './Images/portfolio-2.jpg';
import project3 from './Images/portfolio-3.jpg';
import project4 from './Images/portfolio-4.jpg';

function Project() {
  return (
    <div className='project component__space' id='Project'>
      <div className='heading'>
        <h1 className='heading'> My Projects</h1>
        <p className='heading p__color'>I have made so many projects, but this the highlight of my best work.</p>
      </div>

      <div className='container'>

        <div className='row'>

            <div className='col__3'>
                <div className='project_box pointer relative'>
                    <div className='project_box_img pointer relative'>
                        <div className='project_img_box'>
                            <img src={project1} alt='' className='project_img' />
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
                            <img src={project2} alt='' className='project_img' />
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
                            <img src={project3} alt='' className='project_img' />
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

        <div className='row'>

            <div className='col__3'>
                <div className='project_box pointer relative'>
                    <div className='project_box_img pointer relative'>
                        <div className='project_img_box'>
                            <img src={project4} alt='' className='project_img' />
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
                            <img src={project3} alt='' className='project_img' />
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
                            <img src={project2} alt='' className='project_img' />
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

export default Project;