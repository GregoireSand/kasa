import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Banner from '../../components/Banner';
import Accordion from '../../components/Accordion';


function About(){
    return (
        <>
            <Header />
            <Banner 
                imageUrl='src/assets/about_landscape.png' 
                altText='Paysage montagnard' 
            />
            <Accordion 
                titre="Fiabilité"
                description="Les annonces sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            
            />
             <Accordion 
                titre="Respect"
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
            
            />
             <Accordion 
                titre="Service"
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
            
            />
             <Accordion 
                titre="Sécurité"
                description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                En laissant une note aussi bien à l'hôte qu'au locatoire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "
            
            />
            <Footer />
        </>
    )
}

export default About