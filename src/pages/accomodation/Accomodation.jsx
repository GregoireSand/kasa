import styles from './accomodation.module.scss';
import accomodations from '../../datas/datas.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import Accordion from '../../components/Accordion';


function Accomodation() {
    const { id } = useParams();  

    // Filtre les données pour obtenir uniquement l'appartement avec l'ID spécifié
    const selectedAccomodation = accomodations.find(acc => acc.id === id);
    
    const formattedTags = selectedAccomodation.tags.map(tag => (
        <div key={tag} className={styles.accomodation__tags}>
          {tag}
        </div>
      ));

    return (
        <>
            <Header />
            <div className={styles.pictures}>
                <img className={styles.coverPicture} src={selectedAccomodation.cover} />
            </div>
            <div className={styles.accomodation__details1}>
                <div>
                    <p className={styles.accomodation__title}> 
                        {selectedAccomodation.title} 
                    </p>
                    <p className={styles.accomodation__location}> 
                        {selectedAccomodation.location} 
                    </p>
                </div>
                <div className={styles.accomodation__hostDetails}>
                    <p className={styles.accomodation__hostName}> 
                        {selectedAccomodation.host.name} 
                    </p>
                    <div className={styles.accomodation__hostPictureContainer}> 
                        <img src={selectedAccomodation.host.picture} alt="Photo de profil de l'hôte" className={styles.accomodation__hostPicture}/> 
                    </div>
                </div>
            </div>
            <div className={styles.accomodation__details2}>
                <div className={styles.accomodation__tagsContainer}>
                   {formattedTags}
                </div>
                <div>
                </div>
            
            </div>
                <div className={styles.aboutAccordion}>
                    <div className={styles.accordionContainer}> 
                        <div className={styles.accordion}> 
                            <Accordion
                                titre='Description'
                                description={selectedAccomodation.description}
                                customClass={styles.accordionCustom}
                                customClass2={styles.accordionCustom2}
                                customClass3={styles.accordionCustom3}
                            />
                        </div>
                        <div className={styles.accordion}> 
                            <Accordion 
                                titre='Equipements'
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
