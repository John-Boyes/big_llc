import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogPanel} from '@headlessui/react'

const NavLinks = [
  { name: 'Home', href: '/'},
  { name: 'About', href: '/About'},
  { name: 'Services', href: '/Services'},
  { name: 'Projects', href: '/Projects'},
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

    return (
    <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-600 p-2 shadow-md shadow-stone-400 ">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        
        <img src='\assets\cartoon.png' className='w-12' alt='man holding laptop' /><span class="font-semibold text-xl tracking-tight">Boyes Innovations Group</span>
      </div>
      <div class="block lg:hidden">
        <button 
          onClick={() => setIsOpen(true)}
          class="flex items-center px-3 py-2 border rounded 
          text-teal-200 border-teal-400
          hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
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
          <Link to="/Contact" class="hidden lg:flex lg:justify-end inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Request Consultation</Link>
        </div>
      </div>
    </nav>
    <Dialog open={isOpen} onClose={setIsOpen} className="lg:hidden">
    <div className="fixed inset-0 z-10 flex" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 divide-y divide-gray-500/10">
          <div className="flex items-center justify-between">
            <a href="/" className="flex -m-1.5 p-1.5">
              <span className="sr-only">Boyes Innovations Group</span>
              <img src='\assets\cartoon.png' className='h-8 w-auto' alt='man holding laptop' />
              <span class="pl-2 font-semibold text-xl tracking-tight">Boyes Innovations</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              X
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NavLinks.map((item) => (
                  
                  <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-teal-200"
                  >
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Link to="/Contact" class="mx-auto inline-block text-sm font-semibold px-6 py-4 
                 border rounded-lg text-white
                  bg-gradient-to-r from-blue-400 via-purple-600 via-orange-300 to-red-400
                   hover:bg-gradient-to-r hover:from-blue-200 hover:via-purple-400 hover:via-orange-100 hover:to-red-200
                    hover:text-teal-900 mt-4
                     ">Request Consultation</Link>
              </div>
            </div>
          </div>
        </DialogPanel>
    </Dialog>
  
    </div>

    )
  }
