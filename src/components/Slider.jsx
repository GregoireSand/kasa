import React, { useState } from 'react';
import styles from './slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Condition pour masquer les boutons et l'indicateur si une seule image
  if (images.length === 1) {
    return (
      <div className={styles.slider}>
        <img src={images[0]} alt="Image 1" />
      </div>
    );
  }

  return (
    <div className={styles.slider}>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className={styles.imageIndex}>
        {currentImageIndex + 1}/{images.length}
      </div>
      <button onClick={prevImage} className={styles.sliderBtn} style={{ left: 0 }}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff" }} />
      </button>
      <button onClick={nextImage} className={styles.sliderBtn} style={{ right: 0 }}>
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
};

export default Slider;
