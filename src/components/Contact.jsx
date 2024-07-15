import React from 'react'

function Contact() {
  return (
    <div id="contact" className="  bg-teal-800">
    <h1 className="py-4 text-5xl font-bold text-center text-white" >Contact</h1>

    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <form action="" method="post" encType="multipart/form-data">
          <div className="flex flex-col w-full py-2">

          <label className="uppercase text-sm text-white py-2">Name</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />

          </div>
          <div className="flex flex-col">
              <label className="uppercase text-sm text-white py-2">Email</label>
              <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
          </div>
          <div className="flex flex-col">
              <label className="uppercase text-sm text-white py-2">Subject</label>
              <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
          </div>
          <div className="flex flex-col">
              <label className="uppercase text-sm text-white py-2">Message</label>
              <textarea className="border-2 rounded-lg p-3 flex border-gray-300" name="message" rows="10"></textarea>
          </div>
          <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
              Send Message
          </button>
      </form>
    </div>
</div>
  )
}

export default Contact