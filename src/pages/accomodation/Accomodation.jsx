import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './accomodation.module.scss';
import accomodations from '../../datas/datas.json';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from '../../components/Accordion';
import Slider from '../../components/Slider';
import ErrorPage from "../../pages/error/Error";
import Rating from "../../components/Rating";


function Accomodation() {
  const { id } = useParams();

  // Filtre les données pour obtenir uniquement l'appartement avec l'ID spécifié
  const selectedAccomodation = accomodations.find(acc => acc.id === id);
  if (!selectedAccomodation) {
    return <ErrorPage />;
  }


  const formattedTags = selectedAccomodation.tags.map(tag => (
    <div key={tag} className={styles.accomodation__tags}>
      {tag}
    </div>
  ));

  return (
    <>
      <Header />
      <div className={styles.slider}>
        <Slider images={selectedAccomodation.pictures} />
      </div>

      <div className={styles.detailsContainer}>

        <div className={styles.detailsLeft}>
          <div>
            <p className={styles.accomodation__title}>
              {selectedAccomodation.title}
            </p>
            <p className={styles.accomodation__location}>
              {selectedAccomodation.location}
            </p>
            <div className={styles.accomodation__tagsContainer}>
              {formattedTags}
            </div>
          </div>
        </div>

        <div className={styles.detailsRight}>
          <div className={styles.accomodation__hostDetails}>
            <p className={styles.accomodation__hostName}>
              {selectedAccomodation.host.name}
            </p>
            <div className={styles.accomodation__hostPictureContainer}>
              <img
                src={selectedAccomodation.host.picture}
                alt="Photo de profil de l'hôte"
                className={styles.accomodation__hostPicture}
              />
            </div>
          </div>
          <div>
            <Rating rating={selectedAccomodation.rating} />
          </div> 
        </div>
        
      </div>

      <div className={styles.aboutAccordion}>
        <div className={styles.accordionContainer}>
          <div className={styles.accordion}>
            <Accordion
              titre="Description"
              description={selectedAccomodation.description}
              customClass={styles.accordionCustom}
              customClass2={styles.accordionCustom2}
              customClass3={styles.accordionCustom3}
            />
          </div>
          <div className={styles.accordion}>
            <Accordion
              titre="Equipements"
              description={selectedAccomodation.equipments}
              customClass={styles.accordionCustom}
              customClass2={styles.accordionCustom2}
              customClass3={styles.accordionCustom3}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Accomodation;
