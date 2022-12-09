// building a search bar component
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

const SearchBar = () => {
    let navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/');
    };
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    
    return <div>  
    
    <input
       type="search"
       placeholder="Search here"
       onChange={handleChange}
       value={searchInput} />
    <button onClick={handleOnClick} >Home</button>
    </div>
    
    
    };
// exporting the search bar component
export default SearchBar