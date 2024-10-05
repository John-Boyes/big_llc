import React from 'react'

export default function footer() {
  return (
    <div className='flex items-center justify-center scroll-p-8 bg-black'>
        <div className='flex flex-col md:flex-row gap-8 
            m-16 p-6 text-white text-sm
            justify-center items-center
            '>
        <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='font-bold'>Left
            </p>
            <span className='flex'>this is some long text to see how the footer reacts</span>
        </div>
        <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='font-bold'>Middle
            </p>
            <span>this is some long text to see how the footer reacts</span>
        </div>
        <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='font-bold'>Right
            </p>
            <span>this is some long text to see how the footer reacts</span>
        </div>
        </div>
    </div>
  )
}
