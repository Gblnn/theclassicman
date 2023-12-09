import { Link } from "react-router-dom";
import MenuBar from "../components/menubar";

export default function LandingPage(){
    return(
        <>
        <MenuBar/>
        <div className="page_container">
            {}
            <h1 className="heading">MENS' SUITING<br/> COLLECTION</h1>
            <div className="desc_container">
            <p className="description">We offer the best quality garments ready to be shipped worldwide</p>
            </div>
            
            <Link to = '/categories'>
            <button className="white_btn">
                GET STARTED
            </button>
            </Link>
            
        </div>
        </>
    )
}