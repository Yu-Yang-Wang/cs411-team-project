// building a search bar component
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react'; 



// rounting the search bar component to get the information from backend and display it
// backend link: http://127.0.0.1:5000/api/maps/search/{place_loc}
// backend link: http://127.0.0.1:5000/api/image/search_item/{image_name

const SearchBar_page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState({});
  const [selectedValue, setSelectedValue] = useState('BYDISTANCE');

  // Use the useEffect hook to make the API call when the component is mounted
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/maps/search/${searchTerm}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setResults(data);
      })
      .catch(error => {
        // Handle the error here
        console.error(error);
      });
  }, [searchTerm]); // The hook will only be called when the searchTerm changes

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make the API call to search for places
    // The useEffect hook will handle the API call
  };

  // Handle changes to the selected value in the select element
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const jsonString = selectedValue === 'BYDISTANCE'
  ? JSON.stringify(results.BYDISTANCE)
  : JSON.stringify(results.BYRATING);


  const placesObject = JSON.parse(jsonString || '{}');
  const names = Object.values(placesObject).map(place => place.Name);
  const topName = names[0];


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="BYDISTANCE">BYDISTANCE</option>
          <option value="BYRATING">BYRATING</option>
        </select>
      </form>
      {/* Use the dangerouslySetInnerHTML property to display the results string */}
      <div dangerouslySetInnerHTML={{ __html: jsonString }} />
      <div dangerouslySetInnerHTML={{ __html: topName }} />
    </>
  );
};

  


export default SearchBar_page;