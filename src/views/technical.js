import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './technical.css'

const Technical = (props) => {
  return (
    <section id="gmexperience" className="technical-container">
      <Helmet>
        <title>Technical - hcn</title>
        <meta property="og:title" content="Technical - hcn" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="technical-blog-post-card">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGVsZWN0cmljJTIwY2FyfGVufDB8fHx8MTY1ODE1Nzg5MQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          loading="lazy"
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="technical-image"
        />
        <div className="technical-container1">
          <div className="technical-container2">
            <a href="#gmexperience" className="technical-link">
              Job experience
            </a>
            <span className="technical-text">
              <span className="technical-text01">
                Sept 2020 - Sept 2021 (Internship)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="technical-text03">
                Jun 2022 - Present (Full Time)
              </span>
            </span>
          </div>
          <h1 className="technical-text04">
            Engineer in Training for Electric Vehicle Charging and
            Infrastructure Team
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="technical-text05">
            <span className="technical-text06">Highlights</span>
            <br></br>
            <span>
              - Submitted
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="technical-text09">Patent Application</span>
            <span> for Charging Feature, sponsored by General Motors</span>
            <br></br>
            <span>
              - Lead
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="technical-text13">
              multimillion dollar application
            </span>
            <span>
              {' '}
              for government funding to install workplace charging in Canada
            </span>
            <br></br>
            <span>
              - Helped
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="technical-text17">
              redesign onboarding process
            </span>
            <span>
              {' '}
              and collected technical lessons for EV Experience program
            </span>
            <br></br>
            <span>
              - Spearheading pilot projects for new EV charging features
            </span>
            <br></br>
            <span></span>
          </span>
          <div className="technical-container3">
            <div className="technical-profile">
              <img
                alt="profile"
                src="/playground_assets/general-motors-2021-new-logo-1024x1024-200h.png"
                className="technical-image1"
              />
              <span className="technical-text23">General Motors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technical
