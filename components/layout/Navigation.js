
import Link from "next/link"
import React from "react"
import ThemeSwitch from "./Themeswitch"
import { useState } from 'react';

export const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <>
      <nav className='flex items-center flex-wrap bg-orange-300 dark:bg-orange-300 p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
          
            <span className=' font-medium tracking-wider transition-colors text-2xl text-colorfont hover:text-primary  uppercase tracking-wide'>
              Stian Fredrik Evensen
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:text-primary rounded lg:hidden text-colorfont ml-auto hover:text-primary outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <ThemeSwitch />
        
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto `}
        >
           
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/about'>
              <a className=' font-medium tracking-wider transition-colors lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-colorfont  items-center justify-between hover:text-primary hover:text-primary '>
                OM MEG
              </a>
            </Link>
            <Link href='/projects'>
              <a className='font-medium tracking-wider transition-colors lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-colorfont  items-center justify-between hover:text-primary hover:text-primary'>
                PROSJEKTER
              </a>
            </Link>
           
            <Link href='/contact'>
              <a className=' font-medium tracking-wider transition-colors lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-colorfont  items-center justify-between hover:text-primary hover:text-primary'>
                KONTAKT MEG
              </a>
            </Link>
           
          </div>
        </div>
        
        
        
      </nav>
      
    </>
  );
};

export default Navigation;