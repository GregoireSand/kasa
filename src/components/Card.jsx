import styles from './card.module.scss'

function Card() {
    return(
        <div className={styles.card} >
            <p className={styles.card__text}>Titre de la location</p>
        </div>
    )
}

export default Card