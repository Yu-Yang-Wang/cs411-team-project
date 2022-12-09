import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Login from "./Components/login";

const Login = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    };
    return (
        <div>
            <Login/>
        </div>
    );
}

export default Contact;