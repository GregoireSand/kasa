import styles from './about.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const icon = <FontAwesomeIcon icon={faChevronUp} style={{color: "#ffffff",paddingRight: '20px', paddingTop: '4px'}} />

function About(){
    return (
        <>
        <Header />
        <div className={styles.aboutBanner}>
            <img className={styles.aboutBanner__image} src='src/assets/about_landscape.png' alt='Paysage montrant des pins en premier plan et des montagnes traversées par une rivière en arrière-plan' />
        </div>
        <ul>
            <li>Fiabilité {icon}</li>
            <li>Respect {icon}</li>
            <li>Service {icon}</li>
            <li>Sécurité {icon}</li>
        </ul>
        <Footer />
        </>
    )
}

export default About