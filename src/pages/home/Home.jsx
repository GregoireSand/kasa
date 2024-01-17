import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomePage(){
    return(
    <>
        <Header />
        <h1> My Home Page </h1>
        <p>Go to <Link to="/products">the list of products </Link>
        </p>
        <Footer />
    </>
    )
}

export default HomePage