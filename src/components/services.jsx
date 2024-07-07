import React from 'react'
import Accordion from './accordion'
import services from '../data/services'

export default function Services() {
  return (
    <div>
        <div class="relative">
          <div class="text-overlay absolute left-auto top-auto p-6">
            IT Consulting Services
          </div>
        </div>
        <p className="text-xl font-bold text-left pb-8 ">Boyes Innovations</p>
        <div className='mx-8 md:mx-24 lg:mx-64 xl:mx-80'>
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
