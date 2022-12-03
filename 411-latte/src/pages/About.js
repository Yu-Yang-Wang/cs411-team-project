import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import VertiNavbar from "../Components/VertiNavbar/VertiNavbar";

const About = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div>
      {/* <h2>About Page</h2>
      <Button onClick={handleOnClick} >Home</Button> */}
      <VertiNavbar/>
    </div>
  );
}

export default About;