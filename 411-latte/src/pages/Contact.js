import React from "react" ;
import {Button, Navbar} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import ContactSection from '../Components/ContactSection';
import Map from '../Components/Map';
import ContactForm from "../Components/ContactForm/ContactForm";
import VertiNavbar from "../Components/VertiNavbar/VertiNavbar";

const Contact = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    };
    return (
        <div>
          <Navbar/>
            {/* <VertiNavbar/> */}
            <ContactForm/>
   
        </div>
    );
}

export default Contact;
