import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';


function About(){
    return (
        <>
            <Header />
            <Banner 
                imageUrl='src/assets/about_landscape.png' 
                altText='Paysage montagnard' 
            />
            <Collapse 
                title='Fiabilité' 
                description='La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme' 
            />
            <Collapse 
                title='Respect' 
                description='La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme' 
            />
            <Collapse 
                title='Service' 
                description='La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme' 
            />
            <Collapse 
                title='Sécurité' 
                description="La sécurié est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                cela permet à nos équipes de vérifier que les standards sont bien respéctés. Nous organisons également des ateliers sur la sécurité 
                domestiques pour nos hôtes."
            />

            <Footer />
        </>
    )
}

export default About