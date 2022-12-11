import React from "react"; 
import { Route, Routes, useNavigate, BrowserRouter,Switch,Router} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchBar_page from "./pages/SearchBar_page";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

import "./App.css";
import logo from "./logo.svg";
import { useState } from 'react';
import Navbar from "./Components/Navbar/NavbarElements";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./Components/carousel";
import Card from "./Components/card";
//import Login from "./Components/login";
import VeriNavbar from "./Components/VertiNavbar/VertiNavbar";

//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";

import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";
function App(){
    // const [loginData, setLoginData] = useState(
    //     localStorage.getItem("loginData")
    //     ? JSON.parse(localStorage.getItem("loginData"))
    //     : null

    // );
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');
    // const [searchQuery, setSearchQuery] = useState(query || '');
    // const handleFailure =(result)=>{
    //   alert(result);
    // };
    // const handleLogin =async(googleData)=>{
    //   const res=await fetch('/api/google-login',{
    //     method:'POST',
    //     body: JSON.stringify({tokenId:googleData.tokenId}),
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //   });
    //   const data=await res.json();
    //   setLoginData(data);
    //   localStorage.setItem("loginData",JSON.stringify(data));
    // };

    // const handleLogout = () => {
    //   localStorage.removeItem("loginData");
    //   setLoginData(null);
    // };
    const handleFailure =(result)=>{
      //alert(result);
    } ;
    const handleLogin =(googleData)=>{
      // console.log(googleData);
    };
return (
       
    //<BrowserRouter>
    <div className="App">
      <Navbar/>
      <div>
        
            <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
         onSuccess={handleLogin}
         onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        
        
        ></GoogleLogin>

        
      </div>
     {/* We are wrapping our whole app with UserProvider so that */}
     {/* our user is accessible through out the app from any page*/}
     <UserProvider>
       <Routes>
        <Route path="/search" element={<SearchBar_page />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
         {/* We are protecting our Home Page from unauthenticated */}
         {/* users by wrapping it with PrivateRoute here. */}
         <Route element={<PrivateRoute />}>
           <Route path="/" element={<Home />} />
         </Route>
       </Routes>
     </UserProvider>
     </div>
        
    
    );
};

export default App;
