import React, { forwardRef } from 'react'
import './Services.css'
import ac from '../assets/ac.svg'
import wash from '../assets/wash.svg'
import fridge from '../assets/fridge.svg'
import tv from '../assets/tv.svg'

const Services = forwardRef((props,ref) => {
  return (
    <div className='service' ref={ref} data-aos={props['data-aos']}>
    <div className="cat">
        <h1>Services</h1>
        <div className="cat1" data-aos={props['data-aos']}>
        <img src={ac} alt="" />
          <div className="data" >
          <h1>AC Repair</h1>
          <p>We provide expert air conditioner repair and servicing to ensure your home stays cool and comfortable.
            Whether it's low cooling, unusual noise, gas leakage, or sensor issues we diagnose and fix all types of AC problems quickly
            and efficiently.
          </p>
          </div>
        </div>
        <div className="cat2 " data-aos={props['data-aos']}>
        <img src={fridge} alt="" />
        <div className="data">
            <h1>Refrigerator Repair</h1>
            <p>Is your fridge not cooling or making noise?We repair single-door, double-door, and side-by-side refrigerators.From thermostat issues to compressor problems and gas refilling, we ensure your food stays fresh
                and your fridge runs smoothly
            </p>
        </div>
        </div>
        <div className="cat3" data-aos={props['data-aos']}>
        <img src={wash} alt="" />
        <div className="data">
            <h1>Washing Machine Repair</h1>
            <p>We handle all types of washing machines-- front-load, top-load, and semi-automatic. Common issues like water leakage, spinning problems, and drainage failures are fixed with precision to get your laundry back on track.</p>
        </div>
        </div>
        <div className="cat4" data-aos={props['data-aos']}>
        <img src={tv} alt="" />
        <div className="data">
            <h1>TV Repair</h1>
            <p>From LED to smart TVs, we fix display issues, sound problems, remote control failures, and motherboard errors.We offer quick diagnosis and professional repair to bring your entertainment back to life.</p>
        </div>
        </div>
    </div>
    </div>
  )
});

export default Services
