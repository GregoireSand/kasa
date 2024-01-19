import styles from './about.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Banner from '../../components/Banner';

const customIcon = <FontAwesomeIcon icon={faChevronUp} className={styles.icon} />

function About(){
    return (
        <>
        <Header />
        <Banner imageUrl='src/assets/about_landscape.png' altText='Paysage montagnard' />
        <ul>
            <li>
                <div>
                    Fiabilité {customIcon}
                </div>
                <div className={styles.li__description}>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </div>
            </li>
            <li>
                <div>
                    Respect {customIcon}
                </div>
                <div className={styles.li__description}>
                    <p>La bienveillance fait partie des valeurs fondatries de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p> 
                </div>
            </li>
            <li>
                <div>
                    Service {customIcon}
                </div>
                <div className={styles.li__description}>
                    La bienveillance fait partie des valeurs fondatries de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </div>
            </li>
            <li>
                Sécurité {customIcon}
                <div className={styles.li__description}>
                    La sécurié est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                    chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                    cela permet à nos équipes de vérifier que les standards sont bien respéctés. Nous organisons également des ateliers sur la sécurité 
                    domestiques pour nos hôtes.
                </div>
            </li>    
        </ul>
        <Footer />
        </>
    )
}

export default About