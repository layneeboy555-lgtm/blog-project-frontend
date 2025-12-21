import Navbar from "./Navbar";
import '../styles/login.css'

function Login(){


    return(
        <>
        <div className="Login-field">
           <div className="login-form">
              <h1>Admin Login</h1>
              <input type="text" className="loginInput" placeholder="Enter Admin Email" required></input><br></br>
              <input type="password" className="loginInput" placeholder="Enter Admin Password" required></input><br></br> 
              <button className="loginButton">Login</button>
           </div>
      </div>
        </>
    )
}
export default Login