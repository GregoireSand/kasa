import { Link } from "react-router-dom";
import styles from './header.module.scss';

function Header(){
    return(
        <>  
            <nav className={styles.nav} >
                <img src="src/assets/logo.png" alt="Logo" className={styles.nav__logo} />
                <div className={styles.nav__links}>
                    <a className={styles.btn__home}> <Link to='/'>Accueil</Link></a>
                    <a className={styles.btn__about}> <Link to='/about'>A propos</Link></a>
                </div>
            </nav>
        </>
    )
}

export default Header