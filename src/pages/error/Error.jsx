import styles from './error.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Error(){
    return(
        <>
            <Header />
            <div className={styles.errorPage}>
                <h1 className={styles.errorTitle} >404</h1>
                <p className={styles.errorTitle__sub} >Oups! La page que vous demandez n'existe pas.</p>
                <p className={styles.errorTitle__link}> <Link to='/'>Retourner sur la page d'accueil</Link></p>
            </div>
            <Footer />
        </>
    )
}

export default Error