import React from 'react'

export default function Footer() {
  return (
    <div className='grid justify-items-stretch item-start bg-black'>
        <div className='flex flex-col md:flex-row
            text-white text-sm p-8
            justify-center justify-items-stretch items-start
            '>
                {/* Left */}
            <div className='flex flex-col justify-center items-center m-4'>
                <p className='font-bold text-gray-500 pb-2'>Boyes Innovations Group, LLC
                </p>
                <span className='flex text-xs text-pretty'>IT Consulting Services for non-profits and small businesses</span>
            </div>
                {/* Center */}
            <div className='flex flex-col justify-center items-center mx-auto m-4'>
                <p className='font-bold text-gray-500 pb-2'>About
                </p>
                <span className='flex text-xs'>
                    <ul>
                        <li><a href="https://johnboyes.dev" target="_blank" rel="noopener noreferrer">
                            JohnBoyes.dev</a></li>
                        <li className='p-2 m-2'><a href="https://bigimports.us" target="_blank" rel="noopener noreferrer">
                            Big Imports and Restorations</a></li>
                        <li><a href="https://transplatalliance.org" target="_blank" rel="noopener noreferrer">
                            Transplant Alliance Foundation</a></li>
                    </ul></span>
            </div>
                {/* Right */}
            <div className='flex flex-col justify-center items-center mx-auto m-4'>
                <p className='font-bold text-gray-500 pb-2'>Social Media
                </p>
                <a href='https://www.facebook.com/profile.php?id=61565731981438'
                        target='_blank'
                        className='flex bg-[#1877F2] rounded-full px-1 py-1 mx-auto justify-center items-center' rel="noreferrer">
                    <span className='flex inline-block align-text-bottom pr-1 text-xs gap-1'>
                        <svg width="18" height="18" fill='#ffffff' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg>
                        Facebook
                    </span>
                    </a>
            </div>
        </div>
    </div>
  )
}