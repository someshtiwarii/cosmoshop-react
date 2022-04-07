import "./Login.css"
import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { loginService } from "../../services/loginService";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginInput, setLoginInput] = useState({});
  const [hide, setHide] = useState({ pswd: true });

  const { setIsAuth, setToken, navigate } = useAuth();

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginService(loginInput);

      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);
      setLoginInput({ email: "", password: "" });
      setIsAuth(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <main>
      <div className="login-section">

          <div className="login-heading">
              <h2>Login</h2>
          </div>

          <div className="login-input">
          <form onSubmit={loginHandler}>

              <div className="username-box">
                  <label for="email">Email:</label>
                  <input type="email" id="email" className="uname" name="email" placeholder="Enter email.." 
                  value={loginInput.email || ""}
                  onChange={loginInputHandler} required />
                
              </div>

              <div className="password-box">
                  <label for="password">Password:</label>
                  <div className="password-view-btn">
                  <input id="password" className="password" name="password"
                      placeholder="********" 
                    type={`${hide.pswd ? "password" : "text"}`}
                    value={loginInput.password || ""}
                    onChange={loginInputHandler} 
                    required />

                    <i
                    className={`fas fa-solid ${
                      hide.pswd ? "fas fa-eye" : "fas fa-eye-slash"
                    }`}
                    onClick={() => setHide({ ...hide, pswd: !hide.pswd })}
                  ></i>

                  </div>
                 
              </div>

              <div className="options-box">
                  <div className="remember-option">
                      <input type="checkbox" />
                      <p>Remember me</p>
                  </div>

                  <a href="#">Forgot your password?</a>
              </div>

              <button className="btn btn-primary" type="submit">Login</button>


              </form>    
              </div>

          <div className="signup-link">
              <Link to= "/signup">
                  <p>Create New Account</p>
              </Link>
              <i className="fas fa-angle-right"></i>
          </div>

      </div>

      </main>

    </div>
  );
};

export { Login };