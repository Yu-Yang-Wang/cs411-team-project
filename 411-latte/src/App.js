import React from "react"; 
import { Route, Routes, useNavigate, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import SearchBar from "./pages/SearchBar";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import "./App.css";
import logo from "./logo.svg";


function App() {
    return (
        <div className = "I'm Not Latte">
            <h1 > Testing something </h1>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path = "/contact" element={<Contact />}/>
                <Route path = "/search" element={<SearchBar />}/>
        </Routes>
        </div>
    );
}

export default App;

