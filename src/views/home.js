import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ButtonRed from '../components/button-red'
import ButtonLight from '../components/button-light'
import PortofolioCard from '../components/portofolio-card'
import ServicesCard from '../components/services-card'
import BlogCard from '../components/blog-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>hcn</title>
        <meta property="og:title" content="hcn" />
      </Helmet>
      <div className="home-container1">
        <Header></Header>
      </div>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text">
                <span className="home-text01">
                  Lawless are they that make their wills the law.
                </span>
                <span className="home-text02"></span>
              </h1>
              <span className="home-text03">-William Shakespeare</span>
              <span className="home-text04">
                Welcome! I&apos;m an Electrical Engineer by trade, with a flair
                for creativity and trying new things. This website is a personal
                project to learn web design and to introduce myself to you.
              </span>
              <ButtonRed></ButtonRed>
            </div>
            <div className="home-gallery">
              <div className="home-container2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1657841960983-75c3d5c3d23c?ixid=Mnw5MTMyMXwwfDF8YWxsfDIwfHx8fHx8Mnx8MTY1ODExNDY3MQ&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image"
                />
              </div>
              <div className="home-container3">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1658081459867-108ddc6f7dc5?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY1ODExNDY3MQ&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1657963662561-cba0bfd8c517?ixid=Mnw5MTMyMXwwfDF8YWxsfDR8fHx8fHwyfHwxNjU4MTE0Njcx&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image2"
                />
              </div>
              <div className="home-container4">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1657841961092-4feb2949c3eb?ixid=Mnw5MTMyMXwwfDF8YWxsfDEyfHx8fHx8Mnx8MTY1ODExNDY3MQ&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="home-image3"
                />
                <div className="home-container5">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1658065884515-52161a2cca51?ixid=Mnw5MTMyMXwwfDF8YWxsfDQwfHx8fHx8Mnx8MTY1ODExNjk3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
                    className="home-image4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-text-container">
              <span className="home-text05">about ME</span>
              <h2 className="home-text06 heading2">
                <span>Hi, I&apos;m Hannah.</span>
              </h2>
              <span className="home-text08">Nice to meet you!</span>
              <span>
                <span>
                  Raised in Toronto, Ontario, I am currently working in industry
                  as an Electrical Engineer. I&apos;m passionate about making
                  things better - in whatever capacity I can. So far in my
                  career, this has translated to working on the transition to
                  Electric Vehicles that is currently occuring in the automotive
                  industry.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  In my free time, this amounts to making beautiful art and
                  supporting other women in STEM as best I can!
                </span>
              </span>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/headshot-1000w.jpg"
                className="home-image5"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container1">
              <span className="home-text15">Creativity</span>
              <h2 className="home-text16 heading2">
                <span>Explore my portfolio</span>
              </h2>
              <span className="home-text18">
                <span>
                  Though I am an engineer by trade, my will to learn and
                  enthusiasm for trying new things shines in my portfolio, full
                  of different creative experiments over the years!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <ButtonLight
                primary="See all Projects\n"
                rootClassName="button-light-root-class-name"
              ></ButtonLight>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text20 tab-selector-btn">Photography</span>
              <span className="home-text21 tab-selector-btn">Digital Art</span>
              <span className="home-text22 tab-selector-btn">Paint</span>
              <span className="home-text23 tab-selector-btn">Web Design</span>
              <span className="home-text24 tab-selector-btn">
                Crochet/Knitting
              </span>
              <span className="tab-selector-btn">Multimedia</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                rootClassName="portofolio-card-root-class-name"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                project_title="A brand-new advertising idea"
                rootClassName="portofolio-card-root-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="portofolio-card-root-class-name4"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="portofolio-card-root-class-name3"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="portofolio-card-root-class-name2"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Starbucks secret is a smile when you get your latte"
                rootClassName="portofolio-card-root-class-name1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container2">
                <span className="home-text26">TECHNICAL</span>
                <h2 className="heading2">
                  Over 2 years experience in industry
                </h2>
              </div>
              <div className="home-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <Link to="/technical" className="home-navlink control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="home-cards-container">
              <Link to="/technical" className="home-navlink1">
                <ServicesCard
                  text="EV Charging and Infrastructure"
                  text1="Spearheading projects that improve charging experience and networks in Canada for General Motors Electric Vehicle Customers."
                  text2="General Motors"
                  rootClassName="services-card-root-class-name"
                  className="home-component09"
                ></ServicesCard>
              </Link>
              <ServicesCard
                text="Copy-writting"
                image_src="/playground_assets/file-document-200w.png"
                rootClassName="services-card-root-class-name1"
              ></ServicesCard>
              <ServicesCard
                text="Product Design"
                image_src="/playground_assets/dice-5-200h.png"
                rootClassName="services-card-root-class-name2"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width4 max-content-container">
            <span className="home-text28">Our process</span>
            <h2 className="home-text29 heading2">
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="home-step">
              <span className="home-text33">01</span>
              <div className="home-container6">
                <span className="home-text34">Finding the best idea</span>
                <span className="home-text35">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text36">02</span>
              <div className="home-container7">
                <span className="home-text37">
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text38">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text39">03</span>
              <div className="home-container8">
                <span className="home-text40">Strong design execution</span>
                <span className="home-text41">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text42">from blog</span>
            <h2 className="home-text43 heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="home-text45">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <ButtonLight rootClassName="button-light-root-class-name2"></ButtonLight>
            <div className="home-blog-cards-container">
              <BlogCard rootClassName="blog-card-root-class-name"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="blog-card-root-class-name1"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text49">what are you waiting for?</span>
            <h2 className="home-text50 heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <span className="home-text52">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <ButtonLight
              primary="Contact"
              rootClassName="button-light-root-class-name1"
            ></ButtonLight>
          </div>
        </div>
      </main>
      <div className="home-footer section-container">
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-product-container">
                <span className="home-text56">Product</span>
                <span className="home-text57">About</span>
                <span className="home-text58">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="home-navigate-container">
                <span className="home-text60">Navigate</span>
                <span className="home-text61">Copyrights</span>
                <span className="home-text62">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="home-contact-container">
                <span className="home-text64">Contact Us</span>
                <span className="home-text65">
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width8 max-content-container">
          <h1 className="home-text73">HANNAH NISSENBAUM</h1>
          <span className="home-text74">
            <span>All rights reserved @2022 Hannah Nissenbaum</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
