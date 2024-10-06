import React from 'react'
import Accordion from './accordion'
import services from '../data/services'

//animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default function Services() {
  AOS.init();

  return (
    <div className='flex flex-col scroll-p-8 min-h-screen'>

        <div className='mx-6' 
        data-aos="fade-up">
          {services.map(service => (
            <div className='mx-auto p-2 mb-2 bg-teal-200 rounded-lg shadow-md shadow-stone-400
            divide-y divide-stone-800'> 
           
              <Accordion 
              title={service.title}
              answer={service.answer}
              />

            </div>
          ))}
        </div>
       

    </div>
  )
}
