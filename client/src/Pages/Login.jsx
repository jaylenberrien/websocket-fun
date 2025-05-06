import "./Login.css"
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";


export default function Login(){

    
    return(
    <>
        <div id="page-container">
            < NavBar />
            <h1>This is the login screen</h1>
            <div id="form-container">
                <form>
                    <label for="username">Username:</label>
                    <br/>
                    <input type="text" name="username" required placeholder="cooluser457"/>
                    <br/><br/>
                    <label for="password">Password:</label>
                    <br />
                    <input type="password" name="password" placeholder="supersecret456"required/>
                    <br/><br/>
                    <button>login</button>
                </form>
                <p id="create-acccount-prompt">Don't have an account? Create one <Link to = "/register">here!</Link></p>
            </div>
        </div>
    </>
    )
}