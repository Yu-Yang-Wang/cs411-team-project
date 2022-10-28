import React from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import logo from "./logo.svg";


function App() {
    return (
        <Router>
        <div className = "I'm Not Latte">
            <Navbar />
            <Wrapper>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
            </Wrapper>
            <Footer />
        </div>
        </Router>
    );
    }

export default App;

