import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './accordion.module.scss';

function Accordion({ titre, description, customClass, customClass2, customClass3 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    // Affiche la description si c'est une chaîne de caractères
    if (typeof description === 'string') {
      return <div className={styles.description__text}>{description}</div>;
    }

    // Affiche la description comme une liste sans puce si c'est une liste
    return (
      <ul className={styles.description__list}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className={`${styles.accordion__container} ${customClass}`}>
        <div className={`${styles.accordion__container2} ${customClass2}`}>
          <div onClick={toggleDescription} className={styles.button}>
            {titre}   
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`${styles.icon} ${isExpanded ? styles.rotatedIcon : ''}`}
            />
          </div>
        </div>
        <div className={`${styles.description} ${isExpanded ? styles.description__expanded : ''} ${customClass3}`}>
          {renderDescription()}
        </div>
      </div>
    </>
  );
}

export default Accordion;
