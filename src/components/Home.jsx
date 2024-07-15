import React from "react";
import {TypeAnimation} from "react-type-animation";
import {FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaSquareThreads} from "react-icons/fa6";
import backgroundImg from '../assets/logo5.jpg'

const Main = () => {
    return(
        <div id="main">
            <img className='w-full h-screen object-cover object-center' src={backgroundImg}/>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center ld:items-start items-center gap-4'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
                        Mehmet Eker 
                    </h1>

                    <h2  className="flex text-center sm:text-3xl text-2xl pt-4 text-gray-800">
                        5+ Years of Active Developer Experience <br />
                        Specializing in Mobile Application Development
                    </h2>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I'm someone who 
                        <TypeAnimation
                            sequence={[
                                'Embraces the Challenge',
                                2000, 
                                'Mastered the Code',
                                2000,
                                'Always Learning',
                                2000,
                                'Always Growing',
                                2000,
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' , paddingLeft: '5px'}}
                            repeat={Infinity}
                        />
                    </h2>
                    {/* <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaInstagram className="cursor-pointer" size={20}/>
                        <FaFacebook className="cursor-pointer" size={20}/>
                        <FaXTwitter className="cursor-pointer" size={20}/>
                        <FaSquareThreads className="cursor-pointer" size={20}/>
                        <FaYoutube className="cursor-pointer" size={20}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Main