import React from "react"; 
import { Route, Routes, useNavigate, BrowserRouter} from 'react-router-dom';
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

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];
const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};


const App = () => {
    
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <div>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
            <Navbar/>
            <Carousel/>
            <Card/>
            <Card/>
        </div>

    
    );
};

export default App;