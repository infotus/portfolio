import React from "react";
import {TypeAnimation} from "react-type-animation";

// import {FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaSquareThreads} from "react-icons/fa6";
// import backgroundImg from '../assets/logo3.jpg'

const Main = () => {
    return(
        <div id="main">
            {/* <img className='w-full h-screen object-cover object-center' src={backgroundImg}/> */}
            <div className='w-full h-screen bg-teal-800'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center ld:items-start items-center gap-4'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-100 '>
                        Mehmet Eker 
                    </h1>

                    <h2  className="flex text-center sm:text-3xl text-xl pt-4 text-gray-100 p-2">
                        8+ Years of Active Developer Experience <br />
                        Specializing in Mobile Application Development
                    </h2>
                    <h2 className='flex sm:text-3xl text-xl pt-4 text-gray-100 p-4'>
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
                </div>
            </div>
        </div>
    )
}

export default Main