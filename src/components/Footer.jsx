import styles from './footer.module.scss';

function Footer(){
    return(
        <>
        <div className={styles.footer}>
            <img src="src/assets/logo_white.png" alt="Logo blanc" />
            <p className={styles.footer__rights}>© 2020 Kasa. All rights reserved</p>
        </div>
        </>
    )
}
export default Footer