import React from 'react';
import styles from './cardList.module.scss';
import accomodations from '../datas/datas.json';

function CardList() {
  const cards = accomodations.map((accomodation) => (
    <div className={styles.card} key={accomodation.id}>
      <img className={styles.card__image} src={accomodation.cover} alt={accomodation.title} />
      <p className={styles.card__text}>{accomodation.title}</p>
    </div>
  ));

  return (
    <>
      {cards}
    </>
  );
}

export default CardList;
