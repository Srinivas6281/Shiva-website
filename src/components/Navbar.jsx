import React, { useState ,useRef,useEffect} from 'react';
import './Navbar.css';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import Home from './Home';
import About from './About';
import  Aos from 'aos'
import 'aos/dist/aos.css'
import Services from './Services';
import Contact from './Contact';

const Navbar = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000;,
      once:true;
    });
  
  },[])
  const [isMenuVisible, setMenuVisible] = useState(false);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const serviceFun = ()=>{
    serviceRef.current?.scrollIntoView({behavior:'smooth'})
   if(window.innerWidth<700){
     toggleMenu();
   }
  }
  const contactFun = ()=>{
    contactRef.current?.scrollIntoView({behavior:'smooth'})
   if(window.innerWidth<700){
     toggleMenu();
   }
  }
 
  const aboutFun=()=>{
       aboutRef.current?.scrollIntoView({behavior:'smooth'})
      if(window.innerWidth<700){
         toggleMenu();
      }
  }
  const homeFun =()=>{
   if(window.innerWidth<700){
     toggleMenu();
   }
    homeRef.current?.scrollIntoView({behavior:'smooth'})
  
  }
    const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  
  };

  return (
    <div className='main'>
      <div className="navbar" data-aos="fade-down">
        <ul className='mainbar'>
          <li><h1>HomeFix<span> Hero</span></h1></li>
          <li className='menu'><a href="#" onClick={homeFun}>Home</a></li>
          <li className='menu'><a href="#" onClick={aboutFun}>About me</a></li>
          <li className='menu'><a href="#" onClick={serviceFun}>Services</a></li>
          <li className='menu'><a href="#" onClick={contactFun}>Contact me</a></li>
          <li><img src={menu} alt="Menu" onClick={toggleMenu} /></li>
        </ul>
        {isMenuVisible && (
          <ul className="sidebar side" id='sidebar'>
            <li><img src={close} alt="Close" onClick={toggleMenu} /></li>
            <li><a href="#" onClick={homeFun} >Home</a></li>
            <li><a href="#" onClick={aboutFun}>About me</a></li>
            <li><a href="#" onClick={serviceFun}>Services</a></li>
            <li><a href="#" onClick={contactFun}>Contact me</a></li>
          </ul>
        )}
      </div>
      <Home ref={homeRef} data-aos="fade-up"/>
      <About  ref={aboutRef} data-aos="fade-up"/>
     <Services ref={serviceRef} data-aos="fade-up"/>
     <Contact ref={contactRef} data-aos="fade-up"/>
    </div>
  );
};

export default Navbar;
