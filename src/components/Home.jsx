import React,{forwardRef} from 'react'
import './Home.css'
import profile from '../assets/profile.png'

const Home = forwardRef((props, ref) => {
  return (
    <div className='home' ref={ref}  data-aos={props['data-aos']}>
        <div className="hero">
            <img src={profile} alt="" />
            <div className="info">
                <h1>I'm<span> Shiva Varma</span></h1>
                <h2>"Expert Home Appliance Repair Services"</h2>
                <h3>"AC | Fridge | Washing Machine | TV Repairs"</h3>
               <div className="btn">
               <button> <a href="tel:+919573993725">Call me</a></button>
               </div>
            </div>
        </div>
    </div>
  )
}
);
export default Home
