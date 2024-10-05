import React from 'react'

export default function footer() {
  return (
    <div className='flex items-center justify-center scroll-p-8 bg-black'>
        <div className='flex flex-col md:flex-row gap-12
            m-16 p-6 text-white text-sm
            justify-center items-start
            '>
        <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='font-bold text-gray-500 pb-2'>Boyes Innovations Group, LLC
            </p>
            <span className='flex text-xs'>IT Consulting Services for non-profits and small businesses</span>
        </div>
        <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='font-bold text-gray-500 pb-2'>About
            </p>
            <span className='flex text-xs'>this is some long text to see how the footer reacts</span>
        </div>
        <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='font-bold text-gray-500 pb-2'>Social Media
            </p>
            <div className='flex bg-blue-600 rounded-full px-3 mx-auto'>
                <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg>
                <span className='flex mx-1'>Facebook</span>
                </div>
            <span className='flex text-xs'>
                this is some long text to see how the footer reacts</span>
        </div>
        </div>
    </div>
  )
}
