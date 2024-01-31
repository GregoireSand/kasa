import styles from './footer.module.scss';
import logo from '../assets/logo_white.png';

function Footer(){
    return(
        <>
        <div className={styles.footer}>
            <img src={logo} alt="Logo blanc" />
            <p className={styles.footer__rights}>© 2020 Kasa. All rights reserved</p>
        </div>
        </>
    )
}
export default Footer