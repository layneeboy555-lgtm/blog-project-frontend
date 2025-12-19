import Navbar from "./Navbar";
import '../styles/login.css'

function Login(){


    return(
        <>
        <div className="Login-field">
          <div className="login-form">

           <div className="admin-details">
              <h1>Admin Login</h1>
              <input type="text" placeholder="Enter Admin Email" required></input>
              <input type="password" placeholder="Enter Admin Password" required></input><br></br>
              <button>Login</button>
            </div>

          </div>
        </div>
        </>
    )
}
export default Login