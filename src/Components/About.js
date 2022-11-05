import React from 'react';
import './About.css';
import aboutImg from './Images/about1.jpg'

function About() {
// up to top btn
window.addEventListener("scroll",function(){
  const upToTop = document.querySelector("a.bottom_to_top");
  upToTop.classList.toggle("active",this.window.scrollY > 0)
});

  return (
    <div className='about component__space' id='About'>
      <div className='container'>
        <div className='row'>
            <div className='col__2'>
                <img src={aboutImg} alt='' className='about_img' />
            </div>
            <div className='col__2'>
                <h1 className='about_heading'>About Me</h1>
                <div className='about_meta'>
                    <p className='about_text p__color'>
                    A full Stack Java  Developer.In this time I have completed many kinds of project like Portfolio Website, Website for Technical Blogs and replica of google keep using React JS.Mainly I am a full stack java developer but I also know C,C++,PHP,Javascript and many kinds of programming languages and frameworks.
                    </p>
                    <p className='about_text p__color'>
                    I am also studying with CSE Engeneering /Computer Science Engeneering in my local area.I am also a youtube content creator for know more about my working expereince you can watch my programming tutorial.
                    </p>
                    <div className='about_button d__flex align__items__center'>
                        <a href='#' ><button className='about btn pointer'>Download CV</button></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='up_to_top_btn'>
        <a href='#' className='bottom_to_top'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default About;
