import React from "react" ;
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';


const Contact = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h3> Contact Page</h3>
            <h2>Contact Page</h2>
            <Button onClick={handleOnClick} >Home</Button>
        </div>
    );
}

export default Contact;
