import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Carousel from "../Components/carousel";
import DarkVariantExample from "../Components/carousel";



const Home = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('about');
  };
  // jump to contact page 
  const handleOnClick2 = () => {
    navigate('contact');
  };
  // jump to search bar page
  const handleOnClick3 = () => {
    navigate('search');
  };


  return (
    <div>
      {/* <h2>Home Page</h2>
      <Button onClick={handleOnClick} >About</Button>
      <h2> Contact Page</h2 >
      <Button onClick={handleOnClick2} >Contact</Button>
      <h2> Search Bar</h2 >
      <Button onClick={handleOnClick3} >Search Bar</Button>
      <h2> Login</h2 >
      <Button onClick={handleOnClick3} >Login</Button> */}
      <Carousel/>
    </div>
    
  );
}

export default Home;