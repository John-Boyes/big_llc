/* eslint-disable no-template-curly-in-string */
import React, { useState} from 'react'

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
  <div className='p-2'>
      <button 
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full'
      >
        <span className='my-2 font-semibold'>{title}</span>
        <svg
          className="fill-blue-800 shrink-0 ml-8 my-2"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div 
        className={`grid overflow-hidden transition-all duration-300 ease-in-out 
          text-slate-600 text-sm
          divide-y divide-gray-400

          ${ accordionOpen 
            ? "grid-rows-[1fr] opacity-100" 
            : "grid-rows-[0fr] opacity-0" 
          }`}
      >
        <div className='w-full overflow-hidden bg-teal-100 rounded-md'>
          <p className='p-4 text-left'>
            {answer.map(item => (
                    <p className='px-2 py-1'>
                        {item}
                    </p>
                ))}

          </p>
        </div>

      </div>
    </div>
  );
};

export default Accordion;