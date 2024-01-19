import styles from './banner.module.scss';

function Banner({imageUrl, altText, paragraph}) {
    return(
        <div className={styles.Banner}>
            <img className={styles.Banner__image} src={imageUrl} alt={altText} />
            {paragraph && <p className={styles.Banner__paragraph}>{paragraph}</p>}
        </div>
    )
}

export default Banner