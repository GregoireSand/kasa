// Rating.jsx

import React from 'react';
import styles from './rating.module.scss';

const Rating = ({ note }) => {
  const roundedNote = Math.round(note);

  return (
    <div className={styles.rating}>
      {[...Array(roundedNote)].map((_, index) => (
        <span key={index} className={styles.starFilled}>&#9733;</span>
      ))}
      {[...Array(5 - roundedNote)].map((_, index) => (
        <span key={index} className={styles.star}>&#9733;</span>
      ))}
    </div>
  );
};

export default Rating;
