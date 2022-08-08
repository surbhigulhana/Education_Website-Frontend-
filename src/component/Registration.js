import { Link } from "react-router-dom"
import { useState } from "react";
import Swal from "sweetalert2";

import { Navbar } from "./Navbar";
// import Footer from "./Footer";

export default function Registration() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [picture,setPicture]=useState({fileName:"",bytes:""});

    const handleSubmit = async () => {
        var formData = new FormData();
        formData.append("firstName",firstName);
        formData.append("lastName",lastName);
        formData.append("email",email);
        formData.append("password",password);
       
        try {
            const response = await fetch("http://18.144.53.250:3001/api/register", {
                method: "POST",
                mode: "cors",
                body: formData
            })
            const result = await response.json();
            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    // title: 'Password Changed',
                    text: "record successfully submitted",
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    // title: 'Password Changed',
                    text: "Error Error!!!",
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    function handlePicture(event){
        setPicture({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]});
    }

    return <>
        <Navbar/>
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <Link className="inactive underlineHover" to="/Login"> Login In </Link>
                <h2 className="active">Sign Up </h2>

                <div className="fadeIn first">
                    <img src="/registrationIcon.webp" style={{ width: 90 }} id="icon" alt="User Icon" />
                </div>

                <form>
                    <input
                        type="text"
                        id="firstname"
                        onChange={(event) => setFirstName(event.target.value)}
                        className="fadeIn second"
                        name="First Name"
                        placeholder="Enter FirstName"
                    />
                    <input
                        type="text"
                        id="lastname"
                        onChange={(event) => setLastName(event.target.value)}
                        className="fadeIn second"
                        name="Last Name"
                        placeholder="Enter LastName"
                    />
                 
                    <input
                        type="email"
                        id="login"
                        className="fadeIn second"
                        name="login"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter Email"
                    />
                    <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        name="login"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter Password"
                    />
                    
                    <input
                        type="button"
                        onClick={handleSubmit}
                        className="fadeIn fourth"
                        value="Register Now →"
                        style={{height:"40px"}}
                    />

                </form>
            </div>
        </div>
       
    </>
}