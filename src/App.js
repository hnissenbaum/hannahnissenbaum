import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './styles.css';
import backgroundImage from './images/spaintwo - 520.jpeg';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">hannah</NavLink>
      </div>
      <div className="navbar-links">
        <Link to="/section1">section1</Link>
        <Link to="/section2">Section 2</Link>
        <a href="#section3">Section 3</a>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.twitter.com">Twitter</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.linkedin.com">LinkedIn</a>
      </div>
  </footer>
  );
};

const Section1 = () => {
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (tag) => {
    setActiveTag((prevTag) => (prevTag === tag ? null : tag));
  };

  const objects = [
    {
      title: 'Object 1',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      title: 'Object 2',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
      tags: ['Tag 3', 'Tag 4']
    },
    {
      title: 'Object 3',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
      tags: ['Tag 2', 'Tag 4']
    },
    {
      title: 'Object 4',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
      tags: ['Tag 1', 'Tag 3']
    }
  ];

  const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'];

  const filteredObjects = activeTag
    ? objects.filter((object) => object.tags.includes(activeTag))
    : objects;

  const ObjectItem = ({ title, subtitle, tags }) => {
    return (
      <div className="object">
        <div className="object-item-content">
          <h2 className="object-item-title">{title}</h2>
          <p className="object-item-subtitle">{subtitle}</p>
          <div className="object-item-tags">
            {tags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className={`object-item-tag ${activeTag === tag ? 'activetag' : ''}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="section1">
      <div className="content">
        <h1 className="subtitle">experience</h1>
        {filteredObjects.map((object, index) => (
          <div className="object-item-row" key={index}>
            <ObjectItem title={object.title} subtitle={object.subtitle} tags={object.tags} />
          </div>
        ))}
        <div className="section1-tags">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`section1-tag ${activeTag === tag ? 'activetag' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [typedText, setTypedText] = useState('');
  const texts = ["hi, i'm hannah", 'innovative', 'passionate'];
  let index = 0;
  let charIndex = 0;

  useEffect(() => {
    const type = () => {
      if (charIndex < texts[index].length) {
        setTypedText((prevText) => prevText + texts[index].charAt(charIndex));
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setTypedText((prevText) => prevText.slice(0, -1));
        charIndex--;
        setTimeout(erase, 50);
      } else {
        index++;
        if (index >= texts.length) {
          index = 0;
        }
        setTimeout(type, 500);
      }
    };

    setTimeout(type, 500);

    // Clean up the timeouts when the component unmounts
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home typedText={typedText} backgroundImage={backgroundImage} />} />
          <Route path="/section1" element={<Section1 />} />
        </Routes>
          <Footer />
      </div>
    </Router>
  );
}

const Home = ({ typedText, backgroundImage }) => {
  return (
    <div className="content" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="description-title">
        <p id="typed-text">{typedText}</p>
      </div>
    </div>
  );
};

export default App;
