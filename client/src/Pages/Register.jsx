import { Link } from "react-router-dom";

export default function Register(){


    return(
        <>
            <div id="page-container">
                <h1>This is the Register screen</h1>

                <div id="form-container">
                    <form>
                        <label for="email">Email:</label>
                        <br/>
                        <input type="email" name="email" required placeholder="example@gmail.com"/>
                        <br/><br/>
                        <label for="username">Username:</label>
                        <br/>
                        <input type="text"  name="username" required placeholder="supercooluser123"/>
                        <br/><br/>
                        <label for="password">Password:</label>
                        <br/>
                        <input type="password" name="password" required placeholder="secretpassword456"/>
                        <br/><br/>
                        <button>Create Account</button>
                    </form>
                    <p id="create-acccount-prompt">Already have an account? <Link to="/">Login!</Link></p>
                </div>
                
            </div>
        </>
    )
}
