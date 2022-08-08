import {
    Modal,
    Form,
    Button
} from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

function ForgotPasswordModal(props) {

    const [email, setEmail] = useState("");

    // function for submit the record
    const handleSubmit = async() => {
        try {
            const response = await fetch("http://18.144.53.250:3001/api/sendforgotpasswordmail/" + email)
            const result = await response.json();
            if (result) {
                props.setShow(false);
                Swal.fire({
                    icon: 'info',
                    // title: 'Password Changed',
                    text: "We have send a mail to the given mail Id you can recover your password through that mail",
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

    return (
        <>
            <Modal show={props.show} fullscreen={"md-down"} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton >
                    <Modal.Title>Recover Your Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label><span style={{color:"steelblue",fontSize:"26px"}}>Enter your Registered Email Id</span></Form.Label>
                    <img src="/loginIcon.png" style={{ width: 90,marginLeft:"180px" }} id="icon" alt="User Icon" />
               
                    <Form.Control
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email} placeholder="Enter Email" style={{border:"2px black solid",marginLeft:"30px"}}
                    />
                    <div style={{ textAlign: "center", marginTop: 20 ,}}>
                        <Button variant="primary" onClick={handleSubmit} style={{backgroundColor:"#1266F1"}}>Submit</Button>{' '}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ForgotPasswordModal;