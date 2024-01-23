import { Link } from "react-router-dom";
import styles from './header.module.scss';

function Header(){
    return(
        <>  
            <nav className={styles.nav} >
                <Link to='/'>
                    <img src="src/assets/logo.png" alt="Logo" className={styles.nav__logo} />
                </Link>
                <div>
                    <ul className={styles.nav__links}>
                        <li className={styles.btn__home}> 
                            <Link to='/'>Accueil</Link>
                        </li>
                        <li className={styles.btn__about}> 
                            <Link to='/about'>A propos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header