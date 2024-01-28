import React, { useState } from 'react';
import './slider.css';
import usaid from '../../assets/image/partners/usaid.webp';
import space from '../../assets/image/partners/space.webp';
import tineti from '../../assets/image/partners/tineti.webp';
import tegeta from '../../assets/image/partners/tegeta.webp';
import spectire from '../../assets/image/partners/spectire.webp';
import tbclising from '../../assets/image/partners/tbclising.webp';
import ufc from '../../assets/image/partners/ufc.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  [usaid, space, tineti],
  [tegeta, spectire, tbclising], 
  [ufc] 
];

function Slideshow() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const goToNextGroup = () => {
    setGroupIndex((prevGroupIndex) =>
      prevGroupIndex === images.length - 1 ? 0 : prevGroupIndex + 1
    );
    setIndex(0);
  };

  const goToPrevGroup = () => {
    setGroupIndex((prevGroupIndex) =>
      prevGroupIndex === 0 ? images.length - 1 : prevGroupIndex - 1
    );
    setIndex(0);
  };

  return (
    <div className="slideshow">
      <button className="prevGroup" onClick={goToPrevGroup}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images[groupIndex].map((image, idx) => (
          <img
            className="slide"
            key={idx}
            src={image}
            alt={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      <button className="nextGroup" onClick={goToNextGroup}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="slideshowDots">
        {images.map((group, idx) => (
          <div
            key={idx}
            className={`slideshowDot${groupIndex === idx ? ' active' : ''}`}
            onClick={() => {
              setGroupIndex(idx);
              setIndex(0);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
