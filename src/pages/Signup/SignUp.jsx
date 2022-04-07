import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";
import { signupService } from "../../services/signupService";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signupInput, setSignupInput] = useState({});
  const { setIsAuth, setToken, navigate } = useAuth();
  const [hide, setHide] = useState({ pswd: true, confirmpswd: true });
  const [pswdMatch, setpswdMatch] = useState(true);

  const signupInputHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });

    if (name === "confirmpswd") {
      setpswdMatch(() => (value === signupInput.pswd ? true : false));
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signupService(signupInput);

      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);

      setIsAuth(true);
      setSignupInput({ signupInput: "" });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  
  return (
    <div className="page-wrapper">
      <Navbar />

      <main>

      <div className="login-section">
      

          <div className="login-heading">
              <h2>Sign Up</h2>
          </div>
          

          <div className="login-input">
          <form onSubmit={signupHandler}>

              <div className="username-box">
                  <label for="email">Email:</label>
                  <input type="email" id="email" className="uname" name="email" placeholder="somesh@example.com" 
                  value={signupInput.email || ""}
                  onChange={signupInputHandler}
                  required />
              </div>

              <div className="username-box">
                  <label for="fname">Full name:</label>
                  <input type="text" id="fname" className="uname" name="name" placeholder="Enter full name.."  
                  value={signupInput.name || ""}
                  onChange={signupInputHandler}
                  required
                  />
              </div>

              <div className="password-box">
                  <label for="password">Password:</label>
                  <div className="password-view-btn">
                      <input type={`${hide.pswd ? "password" : "text"}`}
                          placeholder="*********"
                          name="pswd"
                          className="password"
                          value={signupInput.pswd || ""}
                          onChange={signupInputHandler}
                          required 
                          />
                          <i
                          className={`fas fa-solid ${
                            hide.pswd ? "fas fa-eye" : "fas fa-eye-slash"
                          }`}
                          onClick={() => setHide({ ...hide, pswd: !hide.pswd })}
                        ></i>
                  </div>
              </div>

              <div className="password-box">
                  <label for="password">Confirm Password:</label>
                  <div className="password-view-btn">
                      <input 
                            type={`${hide.confirmpswd ? "password" : "text"}`}
                            placeholder="***********"
                            name="confirmpswd"
                            className="password"
                            value={signupInput.confirmpswd || ""}
                            onChange={signupInputHandler}
                            required/>

                          <i
                          className={`fas fa-solid ${
                            hide.confirmpswd ? "fas fa-eye" : "fas fa-eye-slash"
                          }`}
                          onClick={() => setHide({ ...hide, confirmpswd: !hide.confirmpswd })}
                        ></i>

                  </div>
                  {!pswdMatch ? (<div className="message">
                      <p><i className="fas fa-exclamation-triangle"></i>Password did not match</p>
                  </div>) :null}
              </div>

              <div className="options-box">
                  <div className="remember-option">
                      <input type="checkbox" required/>
                      <p>I accept all Terms & Conditions</p>
                  </div>
              </div>


              {pswdMatch ? (
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  disabled
                >
                  Sign Up
                </button>
              )}
      
              </form>
      </div>
         
          <div className="signup-link">
              <Link to="/login">
                  <p>Already have an account?</p>
              </Link>
              <i className="fas fa-angle-right"></i>
          </div>
      </div>
      
      </main>

    </div>
  );
};

export { SignUp };
