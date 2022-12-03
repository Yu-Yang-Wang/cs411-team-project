import React from "react"; 
import { Route, Routes, useNavigate, BrowserRouter,Switch,Router} from 'react-router-dom';
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchBar from "./pages/SearchBar";
import ReactDOM from 'react-dom';

// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

import "./App.css";
import logo from "./logo.svg";
import { useState } from 'react';
import Search from "./Components/search";
import Navbar from "./Components/Navbar/NavbarElements";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./Components/carousel";
import Card from "./Components/card";
//import Login from "./Components/login";
import VeriNavbar from "./Components/VertiNavbar/VertiNavbar";

//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
//import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";
// const filterPosts = (posts, query) => {
//     if (!query) {
//         return posts;
//     }

//     return posts.filter((post) => {
//         const postName = post.name.toLowerCase();
//         return postName.includes(query);
//     });
// };


const App = () => {
    
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    // const filteredPosts = filterPosts(posts, searchQuery);

return (
       
    //<BrowserRouter>
    <div className="App">
     {/* We are wrapping our whole app with UserProvider so that */}
     {/* our user is accessible through out the app from any page*/}
     <UserProvider>
       <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         {/* We are protecting our Home Page from unauthenticated */}
         {/* users by wrapping it with PrivateRoute here. */}
         <Route element={<PrivateRoute />}>
           <Route path="/" element={<Home />} />
         </Route>
       </Routes>
     </UserProvider>
     </div>
   //</BrowserRouter>

        
    // <div><Navbar/>
    
    //     <Routes>

    //             <Route path="/" element={<Home />} />
    //             <Route path="/about" element={<About />}/>
    //             <Route path="/contact" element={<Contact />} />
    //             <Route path="/searchbar" element={<SearchBar />} />
    //     </Routes>
        /* <Carousel/>
            <Card/>
            <Card/>
            <Login/> 
            <VeriNavbar/>  */
        
        
    //   </div> 
        
    
    );
};

export default App;