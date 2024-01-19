import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardContainer";

function HomePage(){
    return(
    <>
        <Header />
        <Banner 
        imageUrl='src/assets/home_image.png' 
        altText='Paysage montagnard'
        paragraph="Chez vous, partout et ailleurs"
        />
        <CardContainer />
        <Footer />
    </>
    )
}

export default HomePage