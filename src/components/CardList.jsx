import React from 'react';
import styles from './cardList.module.scss';
import accomodations from '../datas/datas.json';
import { Link } from "react-router-dom";


function CardList() {
  const cards = accomodations.map((accomodation) => (

      <div className={styles.card} key={accomodation.id}>
        <Link to={`/accomodation/${accomodation.id}`}>
            <img className={styles.card__image} src={accomodation.cover} alt={accomodation.title} />
            <div className={styles.card__overlay}></div>
            <p className={styles.card__text}>{accomodation.title}</p>
        </Link>
      </div>
  ));

  return (
    <>
      {cards}
    </>
  );
}

export default CardList;
