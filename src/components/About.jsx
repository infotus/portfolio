import React from 'react'
import profile from '../assets/profile.jpg'


function About() {
  return (
    <div id='about'>
        <div className='w-full h-screen bg-teal-800'>
          <div className='grid md:grid-cols-2 grid-cols-1 p-2 place-items-center h-screen gap-1 '>
            <img src={profile} className='md:w-[60%] w-[60%] p-2 md:pl-20' />
            <div className='items-center p-2 text-lg text-white'>
                <span className='p-2 text-2xl'>ABOUT ME</span>
                <p>
                  Hello! I'm Mehmet Eker, a passionate software developer with over 7 years of experience in crafting mobile applications. My journey in the tech world began with a fascination for how technology can transform lives, and since then, I've dedicated myself to mastering the art of mobile app development.
                </p>
            </div>
          </div>

        </div>

    </div>
  )
}

export default About