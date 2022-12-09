import React from "react" ;
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import ContactSection from '../Components/ContactSection';
import Map from '../Components/Map';


// const Contact = () => {
//     let navigate = useNavigate();

//     const handleOnClick = () => {
//         navigate('/');
//     };
//     return (
//         <div>
//             <h3> Contact Page</h3>
//             <h2>Contact Page</h2>
//             <Button onClick={handleOnClick} >Home</Button>
//         </div>
//     );
// }

// export default Contact;
export default function Contact() {
    return (
      <>
        <ContactSection />
        <Map />
      </>
    );
  }