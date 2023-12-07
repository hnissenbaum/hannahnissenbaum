import React, { useState } from 'react';
import './Section1.css';

const Section1 = () => {
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (tag) => {
    setActiveTag((prevTag) => (prevTag === tag ? null : tag));
  };

  const objects = [
    {
      title: 'Object 1',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      title: 'Object 2',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
      tags: ['Tag 3', 'Tag 4']
    },
    {
      title: 'Object 3',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
      tags: ['Tag 2', 'Tag 4']
    },
    {
      title: 'Object 4',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt justo, at dignissim ligula. Donec volutpat, lacus at luctus consectetur, ante eros congue risus, non tincidunt ipsum mi ut arcu.',
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

export default Section1;
