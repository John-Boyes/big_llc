import { Fragment } from 'react'
import { Disclosure, Menu, DisclosureButton, MenuButton, MenuItems, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Projects', href: '#Portfolio', current: false },
  { name: 'Work', href: '#Timeline', current: false },
  { name: 'Contact', href: '#Contact', current: false },
]

const passions = [
  { name: 'Transplant Alliance 501(c)(3)', href: 'https://transplantalliance.org', target: '_blank' },
  { name: 'USA Vehicle Import Laws', href: '/US-Gray-Market-Laws', target: "_self" },
  { name: 'Ready Viewer One Podcast', href: 'https://www.readyviewerone.com', target: "_blank" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 
    bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
    dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
    ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 
                    text-slate-600 dark:text-orange-500
                    hover:bg-slate-500 hover:text-white 
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <a href='#'>
                        <span
                        className='dark:text-orange-500 text-slate-700 font-bold'>
                            JohnBoyes.dev
                        </span>
                    </a>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-purple-800 dark:text-gray-300 hover:bg-sky-700 dark:hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
        
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="text-purple-800 dark:text-gray-300 hover:bg-sky-700 dark:hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">
                          Passions
                        </MenuButton>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md
                          bg-stone-200 dark:bg-gray-700 dark:text-white shadow-lg shadow-purple-500 dark:shadow-orange-500 ring-1 ring-black ring-opacity-5 
                          focus:outline-none">
                          
                          <div className="py-1">
                            {passions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target={item.target}
                                className={classNames(item.current ? 'bg-gray-900' : '', 'hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm ')}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

                {/* Align Right Nav */}
              
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}
