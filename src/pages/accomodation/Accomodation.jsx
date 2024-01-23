import styles from './accomodation.module.scss';
import accomodations from '../../datas/datas.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

function Accomodation(){

    const datas =  accomodations.map((accomodation) => (
        <>
           {/* // <img className={styles.image} src={accomodation.pictures}/> */}
            <div >
                <div>
                    <h1>{accomodation.title}</h1>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
        </>
    ));

    return (
        <>
            <Header />
            {datas}
            <Footer />
        </>
    )
}

export default Accomodation