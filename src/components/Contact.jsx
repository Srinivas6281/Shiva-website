import React, { forwardRef } from 'react'
import call from '../assets/call.svg'
import what from '../assets/whatapp.svg'
import './Contact.css'
import location from '../assets/locat.svg'

const Contact = forwardRef((props,ref) => {
  return (
    <div className='contact' ref={ref}  data-aos={props['data-aos']}>
        <div className="footer">
        <div className="contact-me">
            <h1>Contact me</h1>
            <div className="num">
               <div className="call">
                <img src={call} />
               <a href="tel:+919573993725">Call me:+91 9573993725</a>
               </div>
               <div className="whatsapp">
                <img src={what}   />
                <a href="https://wa.me/9573993725" target='_blank'>Whatsapp</a>
               </div>
               <div className="address">
                <img src={location} alt="" />
                <p>
                    Voppicherla village, Karempudi Md, Palnadu Dt 522614
                </p>
               </div>
            </div>
            <div className="form">
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="959a4c2f-02f7-4305-a36b-7816f00032f9"></input>
               <input type="text" placeholder='Enter your name' required/>
               <input type="text" placeholder='Enter your number' required/>
               <label htmlFor="problem">Problem Scenario</label>
               <textarea name="Problem" id="problem" rows='6' cols='40'></textarea>
             <div className="button">
             <button>Submit</button>
             </div>
            </form>
        </div>
        
        </div>
        <div className="div">
       <p>&copy; 2025 Shiva. All rights reserved</p>
       </div>
        </div>
    </div>
  )
});

export default Contact
