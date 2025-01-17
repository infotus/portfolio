import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr';

const Sidenav = () => {

    // Auto set navigation for mobile and desktop
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu size={30} color="black" onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    // Mobile View
                    <div className='fixed w-[100%] h-[100%] bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4' >
                                Home
                            </span>
                        </a>
                        <a onClick={handleNav} href='#about' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                            <AiOutlineUser size={20} />
                            <span className='pl-4' >
                                About
                            </span>
                        </a>

                        <a onClick={handleNav} href='#resume' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4' >
                                Resume
                            </span>
                        </a>
                        <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4' >
                                Contact
                            </span>
                        </a>

                    </div>
                ) : (
                    <div>

                    </div>
                )
            }
            <div className='md:block hidden fixed top-[30%] z-10 pl-3'>
                <div className='flex flex-col justify-center items-center'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome/>
                    </a>
                    <a href='#about' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineUser/>
                    </a>
                    <a href='#resume' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects/>
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </a>
                </div>
            </div>


        </div>

    );
};

export default Sidenav;