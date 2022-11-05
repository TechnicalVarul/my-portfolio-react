import React from 'react';
import footerImg from './Images/footer.png';

function footer() {
  return (
    <div className='footer d__flex align__item__center justify__content__space__between pz-10'  style={{"padding":"10px 20px","zIndex":"100"}}>
        <img src={footerImg} height='70px' className='footer_img pointer' />
        <span className='copyright' style={{"color":"#c6c9d8","fontSize":"14px","opacity":"0.75"}}>Copyright © 2022 Varul Chaurasia</span>
    </div>
  )
}

export default footer;
