import React, { useState } from 'react';

function Contact() {
  const [input, setInput] = useState({name: '', email: '', message: ""});
  const handleChange = (e) => setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
  });


  return (
    <div
      id='Contact'
      className="flex flex-col p-4 mx-auto">
      <div className="flex w-auto text-3xl text-stone-900 font-bold text-left pb-4 mx-auto">
        <p className='backdrop-blur-sm p-4'>Request Consultation</p></div>
      <div className="flex justify-center items-center">
        <form 
          action="https://getform.io/f/34a3f97a-ff80-431e-8aaf-a83240c5375d"
          method="Post"
          className='flex flex-col w-full md:w-7/12 lg:w-6/12'
        >
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={ handleChange }
            placeholder="Name"
            className='p-2 bg-white border-2 rounded-md focus:outline-none shadow-sm shadow-stone-500 '
          />
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={ handleChange }
            placeholder="Email"
            className='my-2 p-2 bg-white border-2 rounded-md focus:outline-none shadow-sm shadow-stone-500 '
          />
          <textarea
            name='message'
            value={input.message}
            onChange={ handleChange }
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-white border-2 rounded-md focus:outline-none shadow-sm shadow-stone-500 '
          />
          <button
            type='submit'
            className='mt-3 text-center inline-block
             px-8 py-3 w-max text-base font-medium 
             rounded-md text-white 
             bg-gradient-to-r from-blue-400 via-purple-600 via-orange-300 to-red-400
             hover:bg-gradient-to-r hover:from-blue-200 hover:via-purple-400 hover:via-orange-100 hover:to-red-200
             hover:text-teal-900
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