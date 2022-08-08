import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";


import Footer from "./Footer";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { Navbar } from "./Navbar";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [active, setActive] = useState("");
    const [message, setMessage] = useState(" ");
    const [show, setShow] = useState(false);
  
    const history = useNavigate();
  
    async function submitf() {
      let databody = {
        email: email,
        password: password,
      };
  
      let result = await fetch("http://18.144.53.250:3001/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(databody),
      });
  
      let data = await result.json();
      if (data.status === "success") {
        sessionStorage.setItem("data", JSON.stringify(data));
        history("/IT", { state: data });
      }
      else{
        Swal.fire({
          icon: 'error',
          // title: 'Password Changed',
          text: "Enter Correct Details",
      });
      }
      console.log(data);
      setEmail("");
      setPassword("");
    }

    // function for forgot password
    const handleForgotPassword = () => {
        setShow(true);
    }

    return <>
      
        <Navbar/>
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <h2 className="active"> Login In </h2>
                <Link className="inactive underlinHover" to="/registration">Sign Up </Link>

                <div className="fadeIn first">
                    <img src="/loginIcon.png" style={{ width: 90 }} id="icon" alt="User Icon" />
                </div>

                <form>
                    <input
                        type="email"
                        id="login"
                        className="fadeIn second"
                        name="login"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="login"
                    />
                    <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        name="login"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                    />
                    <input
                        type="button"
                        onClick={() => {
                            if (message === "") {
                              setActive("user");
                            }
                            submitf();
                          }}
                        className="fadeIn fourth"
                        value="Log In"
                        style={{height:"40px"}}
                    />
                </form>

                <div id="formFooter">
                    <span className="underlineHover forgot-password" onClick={() => handleForgotPassword("md-down")}>Forgot Password?</span>
                </div>

                <ForgotPasswordModal
                    show={show}
                    setShow={setShow}
                />

            </div>
            {/* <Footer style={{width:"100%"}}/> */}
        </div>

    </>
}