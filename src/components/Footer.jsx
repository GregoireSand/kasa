import styles from './footer.module.scss';
import logo from '../assets/logo_white.png';

function Footer(){
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.footer__subContainer}>
                <img src={logo} alt="Logo blanc" className={styles.footer__icon}/>
                <p className={styles.footer__rights}>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
        </>
    )
}
export default Footer