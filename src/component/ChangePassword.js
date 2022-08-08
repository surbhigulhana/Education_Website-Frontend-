import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function ChangePassword() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const history = useNavigate();
    const location = useLocation();

    useEffect(function () {
        const userEmail = location.pathname.split("/")[2];
        setEmail(userEmail);
    }, [location.pathname]);

    const handleChangePassword = async () => {
        const body = {
            email,
            password
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                // title: 'Password Changed',
                text: "Password and Confirm Password are not matching",
            });
        }
        else {
            try {
                const response = await fetch("http://18.144.53.250:3001/api/changepassword", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
       
                    },
                    body: JSON.stringify(body)
                })
                const result = await response.json();
                if (result.success) {
                    Swal.fire({
                        icon: 'success',
                        // title: 'Password Changed',
                        text: "password successfully updated",
                    }).then(function(){
                        history("/");
                    });
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        // title: 'Password Changed',
                        text: result.err,
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return <>
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <h2 className="active"> Recover Password </h2>

                <div className="fadeIn first">
                    <img src="/loginIcon.png" style={{ width: 90 }} id="icon" alt="User Icon" />
                </div>

                <form>
                    <input
                        type="password"
                        id="password"
                        className="fadeIn second"
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        id="confirm password"
                        className="fadeIn third"
                        name="confirm password"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder="Confirm Password"
                    />
                    <input
                        type="button"
                        onClick={handleChangePassword}
                        className="fadeIn fourth"
                        value="Change"
                        style={{height:"40px"}}
                    />
                </form>

            </div>
        </div>
    </>
}