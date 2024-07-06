import React from 'react';

function Contact() {
  return (
    <div
      id='Contact'
      className="flex flex-col p-12 mx-auto">
      <div className="flex justify-center items-center">
        <form 
          action="hhttps://getform.io/f/34a3f97a-ff80-431e-8aaf-a83240c5375d"
          method="Post"
          className='flex flex-col w-full md:w-7/12 lg:w-4/12'
        >
          <p className="text-xl font-bold text-left pb-4">Request Consultation</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className='p-2 bg-white border-2 rounded-md focus:outline-none shadow-sm shadow-stone-500 '
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className='my-2 p-2 bg-white border-2 rounded-md focus:outline-none shadow-sm shadow-stone-500 '
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-white border-2 rounded-md focus:outline-none shadow-sm shadow-stone-500 '
          />
          <button
            type='button'
            className='mt-3 text-center inline-block
             px-8 py-3 w-max text-base font-medium 
             rounded-md text-white 
             bg-gradient-to-r from-green-500 via-red-300 via-pink-400 via-red-300 to-green-500
             '
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;