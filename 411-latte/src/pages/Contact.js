import React from "react" ;
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';


const Contact = () => {
    let navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/home');
    };
    return (
        <div>
            <h2>Contact Page</h2>
            <Button onClick={handleOnClick} >Home</Button>
        </div>
    );
}

export default Contact;
