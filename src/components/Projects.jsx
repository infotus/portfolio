import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IoSchoolSharp } from "react-icons/io5"
import { MdWork } from "react-icons/md"


function Projects() {
  return (
    <div id='resume'>
      <div className='w-full h-full'>

        <h1 className='text-5xl text-center text-bold text-teal-800 pt-5'> Resume</h1>

        {/* <div class="absolute left-1/2 -ml-0.5 w-0.5 h-screen bg-gray-600"></div> */}
        
        <VerticalTimeline>

          <VerticalTimelineElement 
          contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
          contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
          date="2022 - present"
          iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
          className="vertical-timeline-element--work"
          icon={<MdWork />}
          >
          <h3 className="vertical-timeline-element-title text-gray-100">Kyi Co. Ltd. </h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-100">Tokyo, Japan</h4>
          <p className='text-gray-100'>
            1. Vingrid: As a programmer, I worked on terrain design and improvement, built animations and interactions, and optimized video and system performance to enhance environment quality. I also prepared documentation for the application’s publication. The app was successfully launched on both Android and iOS platforms using Unity3D, Blender, Houdini, Visual Studio, GitHub, AWS, Sourcetree, Laravel, PHP, C#, and Unity Visual Scripting (Bolt).
          </p>

          <p className='text-gray-100'>
            2. Hoshiyomi (ほしよみ参道): My role involved terrain design and optimization, reducing the app size from over 1GB to less than 150MB, and improving environment quality. I implemented an in-app purchase system and built a data encryption system while preparing documentation for publication. The app was released on Android and iOS platforms, leveraging Unity3D, Blender, Visual Studio, GitHub, C#, and AWS.
          </p>

          <p className='text-gray-100'>
            3. Cheer Supports: I designed the system using the MVVM architecture model, focusing on UI/UX design, synchronizing application data with AWS database connections, and developing new API routes for performance improvement. Additionally, I implemented in-app purchases, built a chat system, and established data encryption/decryption systems. I also prepared the publication documentation for the app, which was launched on both Android and iOS platforms using Swift 5, Xcode, GitHub, Laravel, AWS, VSCode, MacOS, and Windows.
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
          contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
          date="2021 - 2022"
          iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
          icon={<IoSchoolSharp />}
          className="vertical-timeline-element--education"
          >
            <h3 className="vertical-timeline-element-title text-gray-100 p-1">Kudan Institute of Japanese Language</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100 p-1">Tokyo, Japan</h4>

          </VerticalTimelineElement>

          <VerticalTimelineElement 
          contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
          contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
          date="2021 - 2022"
          iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
          className="vertical-timeline-element--work"
          icon={<MdWork />}
          >

          <h3 className="vertical-timeline-element-title text-gray-100">Freelance</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-100">Istanbul, Türkiye</h4>
          <p className='text-gray-100'>
            Develop a software that collects data on amazon website and displays it on a graph. Modify and maintain existing software to adapt to new system, improve performance and scale with client needs and request. Work closely with clients to establish problem specifications and system designs. Aimed for a 30% annual increase.

          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
          contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
          date="2016 - 2018"
          iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
          className="vertical-timeline-element--work"
          icon={<MdWork />}
          >

          <h3 className="vertical-timeline-element-title text-gray-100">Freelance</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-100">Istanbul, Türkiye</h4>
          <p className='text-gray-100'>
            From 2016 to 2018 in Istanbul, I developed a private school application that allowed students to check their exam results, course grades, and access test practice materials. I designed the entire application using a monolithic-based architecture, focusing on creating both the graphical user interface (GUI) and the API. This development led to a noticeable improvement in students' exam scores, with an increase of between 10 and 20 percent. The project utilized a technical environment that included Unity2D, Visual Studio, Unity Remote, GitHub, Android Studio, and Windows OS.
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
          contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
          date="2016 - 2017"
          iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
          className="vertical-timeline-element--work"
          icon={<MdWork />}
          >

          <h3 className="vertical-timeline-element-title text-gray-100">Freelance</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-100">Istanbul, Türkiye</h4>
          <p className='text-gray-100'>
            
          During my friend Master's thesis at Yildiz Technical University in Istanbul from 2016 to 2017, I worked as part of a two-person team to develop a GPS-based augmented reality application. This application utilized a local coordinate system to display underground channels via a mobile camera. We enhanced GPS accuracy for measurements under 100 meters by utilizing only L1 and L5 frequencies, achieving an accuracy range of 2 to 5 meters. The project was developed using Unity3D, Visual Studio, Unity Remote, GitHub, Mapbox SDK, Vuforia SDK, and Windows OS.
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
          contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
          date="2013 - 2015"
          iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
          className="vertical-timeline-element--work"
          icon={<MdWork />}
          >

          <h3 className="vertical-timeline-element-title text-gray-100">Prime Gayrimenkul Degerleme Co. </h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-100">Istanbul, Türkiye</h4>
          <p className='text-gray-100'>
            As a Real Estate Appraiser at Prime Gayrimenkul Degerleme in Istanbul from 2013 to 2015, I was responsible for collecting and analyzing data to identify real estate market trends and evaluating land and neighborhood conditions to assess factors affecting property values. My duties included gathering county land values and sales data from nearby properties to establish accurate property valuations, calculating these values by considering depreciation, replacement costs, and income potential, and preparing detailed reports that summarized valuation methods and adhered to appraisal standards. Additionally, I ensured that all valuation reports were archived confidentially.
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
            contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
            contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
            date="2008 - 2013"
            iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
            icon={<IoSchoolSharp />}
            className="vertical-timeline-element--education"
          >
            <h3 className="vertical-timeline-element-title text-gray-100 p-1">Ondokuz Mayis University</h3>
            <h3 className="vertical-timeline-element-title text-gray-100 p-1">Bachelor of Science in Geomatics Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100 p-1">Samsun, Türkiye</h4>

          </VerticalTimelineElement>

        </VerticalTimeline>

      </div>


    </div>
  )
}

export default Projects