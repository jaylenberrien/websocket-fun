import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar(){


    return(
        <>
            <div id="navbar-container">
                <div id="home-button"><Link to="chatlist">home-button</Link></div>
            </div>
        </>
    )
}