import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './accordion.module.scss';

function Accordion({titre, description, descAccomodation}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={styles.accordion__container}>
        <div >
          <div onClick={toggleDescription} className={styles.button}>
            {titre}   
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`${styles.icon} ${isExpanded ? styles.rotatedIcon : ''}`}
            />
          </div>
        </div>
        <div className={`${styles.description} ${isExpanded ? styles.description__expanded : ''}`}>
          <div className={styles.description__text}>
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
