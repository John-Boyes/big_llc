import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <nav class="flex items-center justify-between flex-wrap bg-teal-600 p-6 shadow-md shadow-stone-400 ">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    <img src='\assets\cartoon.png' className='w-12' alt='man holding laptop' /><span class="font-semibold text-xl tracking-tight">Boyes Innovations Group</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-lg font-semibold text-gray-200 lg:flex-grow">
      <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mx-4">Home
      </Link>
      <Link to="/About" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mx-4">About Us
      </Link>
      <Link to="/Services" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mx-4">Services
      </Link>
      <Link to="/Projects" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mx-4">Projects
      </Link>
    </div>
    <div>
      <Link to="/Contact" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white 
        hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Request Consultation</Link>
    </div>
  </div>
</nav>
    )
  }
}
