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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, minima corporis fuga ipsum amet deleniti dolores obcaecati quo animi? Adipisci commodi odio corrupti temporibus nulla maxime eum unde consectetur quo!</p>
            </div>
          </div>

        </div>

    </div>
  )
}

export default About