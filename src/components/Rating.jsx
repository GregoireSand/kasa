function Rating({isGrey, rating}){

    return(
    <span>
        <i className={`fa-solid fa-star ${isGrey}`} title={`étoile de notation`}></i>
    </span>
    )
}

export default Rating