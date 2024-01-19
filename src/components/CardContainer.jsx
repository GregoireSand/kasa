import styles from './cardContainer.module.scss';
import Card from './Card'

function CardContainer(){
    return(
        <div className={styles.cardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardContainer