import React from 'react';
import styles from './rating.module.scss';  // Assurez-vous d'ajuster le chemin selon votre structure de fichiers
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const stars = [];

  // Première boucle pour les étoiles roses
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}><FontAwesomeIcon icon={faStar} style={{color: "#ea5c5d",}} className={styles.icon} /></span>);
  }

  // Deuxième boucle pour les étoiles grises
  for (let i = rating; i < 5; i++) {
    stars.push(<span key={i}><FontAwesomeIcon icon={faStar} style={{color: "#7a7a7a",}} className={styles.icon}/></span>);
  }

  return <div className={styles.ratingContainer}>{stars}</div>;
};

export default Rating;
