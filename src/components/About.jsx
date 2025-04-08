import React,{forwardRef}from 'react'
import './About.css'
import arrow from '../assets/arrow.svg'

const About = forwardRef((props,ref) => {
  return (
    <div className='about' ref={ref}  data-aos={props['data-aos']}>
        <div className="about-me">
            <h1 data-aos={props['data-aos']}>About Me</h1>
            <div className="con1">
               <p data-aos={props['data-aos']}> <img src={arrow} alt="" />  Hi , I'm Shiva, a dedicated home appliance repair specialist with over 5 years of experience at Samsung.
               I specialize in repairing and servicing a wide range of home appliances including <span>air conditioner, refrigerators, washing machines, and televisions</span>
               </p><br />
               <p data-aos={props['data-aos']}><img src={arrow} alt="" /> 
                 Over the years, I've built a reputation for <span>reliable service, honest work, </span>and <span>fast problem-solving.</span>
                My goal is simple to make sure your appliances work smoothly and your home runs stress-free.
               </p><br />
               <p data-aos={props['data-aos']}> <img src={arrow} alt="" /> Whether it's cooling issue in your fridge, a noisy washing machine, or an unresponsive TV, you can contact me to get it fixed with professional precision and care.</p><br />
               <p data-aos={props['data-aos']}><img src={arrow} alt="" />  Need help with your appliance? Just reach out-I'm here to help!</p>
            </div>
        </div>
    </div>
  )
});

export default About
