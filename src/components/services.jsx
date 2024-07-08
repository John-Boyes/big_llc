import React from 'react'
import Accordion from './accordion'
import services from '../data/services'

export default function Services() {
  return (
    <div className='flex flex-col scroll-p-8'>

        <div className='mx-6'>
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
