import React from 'react'
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-3xl pb-6'>
                    <span className='text-blue-600'></span>
                </p>
                <div className='flex gap-6 pb-5'>
                    <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' />
                    <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600-600' />
                    <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
                    <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' />
                </div>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Sign Up for Newsletter</p>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Contact Us</p>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Follow Us</p>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Address</p>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Email Address</p>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Phone</p>
            </ul>
        </div>
    </div>
  )
}

export default Footer;