import React,{useState} from 'react'
import './Home.css';
import logo from './Images/logo.png';
function Home() {

  //fixed Navbar
  window.addEventListener("scroll",function(){
    const header = document.querySelector(".header");
    header.classList.toggle("active",this.window.scrollY > 0)
  });

  // toggle Menu
  const [show, setShow] = useState(false);

  return (
    <div className='home' id='Home'>
      <div className='home_bg'>
        <div className='header d__flex align__items__center pxy__30'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='navigation pxy__30'>
                <ul className='navbar d__flex'>
                    <a href='#Home' ><li className='nav_items mx__15'>Home</li></a>
                    <a href='#About' ><li className='nav_items mx__15'>About</li></a>
                    <a href='#Service' ><li className='nav_items mx__15'>Services</li></a>
                    <a href='#Project' ><li className='nav_items mx__15'>Portfolio</li></a>
                    <a href='#Blog' ><li className='nav_items mx__15'>Blog</li></a>
                    <a href='#Contact' ><li className='nav_items mx__15'>Contact</li></a>
                </ul>
            </div>
            <div className='toggle_menu'>
            <svg onClick={()=>setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical white pointer" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            </div>
            {show ? ( 
            <div className='sideNavbar'>
                <ul className='sidebar d__flex'>
                    <a href='#Home' ><li className='sideNavbar'>Home</li></a>
                    <a href='#About' ><li className='sideNavbar'>About</li></a>
                    <a href='#Service' ><li className='sideNavbar'>Services</li></a>
                    <a href='#Project' ><li className='sideNavbar'>Portfolio</li></a>
                    <a href='#Blog' ><li className='sideNavbar'>Blog</li></a>
                    <a href='#Contact' ><li className='sideNavbar'>Contact</li></a>
                </ul>
            </div> ):null }
        </div>
        {/*Home Container*/}
        <div className='container'>
            <div className='home_content'>
                <div className='home_meta'>
                    <h1 className='home_text pz__10'>WELCOME TO MY WORLD</h1>
                    <h2 className='home_text pz__10'>Hi, I'm Varul Chaurasia.</h2>
                    <h3 className='home_text sweet pz__10'>Java Developer.</h3>
                    <h4 className='home_text pz__10'>Based in Indore.</h4>
                </div>
            </div>
        </div>
        <div >

        </div>
      </div>
    </div>
  )
}

export default Home;
