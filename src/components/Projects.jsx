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
            date="2008 - 2013"
            iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
            icon={<IoSchoolSharp />}
            className="vertical-timeline-element--education"
          >
            <h3 className="vertical-timeline-element-title text-gray-100 p-1">Ondokuz Mayis University</h3>
            <h3 className="vertical-timeline-element-title text-gray-100 p-1">Bachelor of Science in Geomatics Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100 p-1">Samsun, Türkiye</h4>

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
            date="2016 - 2017"
            iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
            className="vertical-timeline-element--work"
            icon={<MdWork />}
            >

            <h3 className="vertical-timeline-element-title text-gray-100">Freelance/Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100">Istanbul, Türkiye</h4>
            <p className='text-gray-100'>
                During my friend Master's thesis at Yildiz Technical University in Istanbul from 2016 to 2017, I worked as part of a two-person team to develop a GPS-based augmented reality application. This application utilized a local coordinate system to display underground channels via a mobile camera. We enhanced GPS accuracy for measurements under 100 meters by utilizing only L1 and L5 frequencies, achieving an accuracy range of 2 to 5 meters. The project was developed using Unity3D, Visual Studio, Unity Remote, GitHub, Mapbox SDK, Vuforia SDK, and Windows OS.
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

            <h3 className="vertical-timeline-element-title text-gray-100">Freelance/Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100">Istanbul, Türkiye</h4>
            <p className='text-gray-100'>
              From 2016 to 2018 in Istanbul, I developed a private school application that allowed students to check their exam results, course grades, and access test practice materials. I designed the entire application using a monolithic-based architecture, focusing on creating both the graphical user interface (GUI) and the API. This development led to a noticeable improvement in students' exam scores, with an increase of between 10 and 20 percent. The project utilized a technical environment that included Unity2D, Visual Studio, Unity Remote, GitHub, Android Studio, and Windows OS.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
            contentStyle={{ background: '	rgb(0,128,128)', color: '#008080' }}
            contentArrowStyle={{ borderRight: '7px solid  	rgb(0,128,128)' }}
            date="2021 - 2022"
            iconStyle={{ background: '	rgb(0,128,128)', color: '#FFFFFF' }}
            className="vertical-timeline-element--work"
            icon={<MdWork />}
            >

            <h3 className="vertical-timeline-element-title text-gray-100">Freelance/Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100">Istanbul, Türkiye</h4>
            <p className='text-gray-100'>
              Develop a software that collects data on amazon website and displays it on a graph. Modify and maintain existing software to adapt to new system, improve performance and scale with client needs and request. Work closely with clients to establish problem specifications and system designs. Aimed for a 30% annual increase.
            </p>
          </VerticalTimelineElement>

          {/* Heja Construction */}
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0,128,128)', color: '#008080' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(0,128,128)' }}
            date="2016 - 2020"
            iconStyle={{ background: 'rgb(0,128,128)', color: '#FFFFFF' }}
            className="vertical-timeline-element--work"
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title text-gray-100">
              Heja Construction Co.
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100">
              Istanbul, Türkiye
            </h4>
            <p className="text-gray-100">
              Worked as a Project Manager, leading residential and commercial construction
              projects from planning through completion. Managed project schedules,
              contractor coordination, budgeting, cost estimation, contract preparation,
              quality control, and site supervision while ensuring projects were delivered
              on time and within budget.
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

          {/* KYI */}
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0,128,128)', color: '#008080' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(0,128,128)' }}
            date="Jul 2022 - Aug 2024"
            iconStyle={{ background: 'rgb(0,128,128)', color: '#FFFFFF' }}
            className="vertical-timeline-element--work"
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title text-gray-100">
              KYI Co. Ltd.
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100">
              Tokyo, Japan
            </h4>

            <p className="text-gray-100">
              <strong>1. Vingrid:</strong> Contributed to the development of a VR
              application by designing and optimizing 3D environments, creating
              animations, improving application performance, and preparing releases for
              Android and iOS using Unity, C#, AWS, GitHub, and Visual Studio.
            </p>

            <p className="text-gray-100">
              <strong>2. Hoshiyomi (ほしよみ参道):</strong> Developed and optimized a VR
              shrine experience, improving environment quality, implementing an in-app
              purchase system, and contributing to programming, testing, and deployment
              using Unity, C#, GitHub, and AWS.
            </p>

            <p className="text-gray-100">
              <strong>3. Cheer Supports:</strong> Developed new features for the official
              iOS application, including chat, electronic payments, login bonuses, points,
              notifications, API integration, database development, UI improvements, and
              data encryption/decryption using Swift, Laravel, PHP, Xcode, and GitHub.
            </p>
          </VerticalTimelineElement>

          {/* Extreme */}
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0,128,128)', color: '#008080' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(0,128,128)' }}
            date="Oct 2024 - Dec 2024"
            iconStyle={{ background: 'rgb(0,128,128)', color: '#FFFFFF' }}
            className="vertical-timeline-element--work"
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title text-gray-100">
              Extreme Co. Ltd.
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100">
              Tokyo, Japan
            </h4>

            <p className="text-gray-100">
              <strong>1. Nippon TV Election System:</strong> Participated in updating the
              election live-view system used during national election broadcasts.
              Responsible for UI improvements, system enhancements, software integration,
              testing, and maintenance using Visual Basic 2015 and .NET Framework.
            </p>

            <p className="text-gray-100">
              <strong>2. Kagome Official App:</strong> Developed new features for
              Kagome's official iOS application, including UI implementation, database
              development, programming, testing, and release using Swift and Xcode.
            </p>
          </VerticalTimelineElement>

          {/* Raxeria */}
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0,128,128)', color: '#008080' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(0,128,128)' }}
            date="Mar 2025 - Present"
            iconStyle={{ background: 'rgb(0,128,128)', color: '#FFFFFF' }}
            className="vertical-timeline-element--work"
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title text-gray-100">
              Raxeria Co. Ltd.
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-100">
              Tokyo, Japan
            </h4>

            <p className="text-gray-100">
              <strong>1. Corporate Website (Raxeria Official Site):</strong> Developed
              and maintained Raxeria's corporate website using Next.js, TypeScript, and
              Vercel. Responsible for UI implementation, testing, deployment, SEO
              optimization, and ongoing maintenance to strengthen the company's online
              presence.
            </p>

            <p className="text-gray-100">
              <strong>2. Online English Conversation Platform (Noe Talk):</strong>
              Contributed to the development of an AI-powered English conversation
              platform that enables users to practice with both AI and human partners.
              Worked on UI improvements, backend development, user management,
              conversation logic, deployment, testing, and maintenance using Vite,
              Laravel, MySQL, and Nginx.
            </p>

            <p className="text-gray-100">
              <strong>3. AI Video Generation Platform (ErosMuse):</strong> Lead developer
              of an AI-powered web application that generates short videos from a single
              image. Designed APIs, databases, UI, deployment, and infrastructure using
              Next.js, FastAPI, PostgreSQL, Docker, and DigitalOcean.
            </p>

            <p className="text-gray-100">
              <strong>4. Computer Vision Mobile Application:</strong> Designed and
              developed an end-to-end Android application that automates complex gaming
              tasks using computer vision and a custom YOLO model. Responsible for API
              development, UI design, machine learning integration, database development,
              deployment, and maintenance using Kotlin, FastAPI, PostgreSQL, Docker, and
              Android Studio.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>

      </div>
      
    </div>
  )
}

export default Projects