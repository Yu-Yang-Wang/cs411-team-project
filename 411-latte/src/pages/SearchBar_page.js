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

function get_info() {
    fetch(`http://127.0.0.1:5000/api/maps//search/all/${searchTerm}`, {
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
  } 

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    get_info();
    // Make the API call to search for places
    // The useEffect hook will handle the API call
  };

  // Handle changes to the selected value in the select element
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // get the name, phone, rating, website and photo of the result 
  const names = results.names || [];
  const phones = results.phone || [];
  const ratings = results.rating || [];
  const websites = results.website || [];
  const photos = results.photo || [];
  

  // first 5 elements of each array 
  const firstFiveNames = names.slice(0, 5);
  const firstFivePhones = phones.slice(0, 5);
  const firstFiveRatings = ratings.slice(0, 5);
  const firstFiveWebsites = websites.slice(0, 5);
  const firstFivePhotos = photos.slice(0, 5);



  // Get the last 5 elements of each array using the Array.slice() method
  const lastFiveNames = names.slice(-5);
  const lastFivePhones = phones.slice(-5);
  const lastFiveRatings = ratings.slice(-5);
  const lastFiveWebsites = websites.slice(-5);
  const lastFivePhotos = photos.slice(-5);
  


  return (
    <>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>Search</button>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="BYDISTANCE">BYDISTANCE</option>
          <option value="BYRATING">BYRATING</option>
        </select>
      </form>
      {/* Display the name, phone number, rating, website (clickable), photo of the last 5 places in a table */}
      {selectedValue === 'BYDISTANCE' && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Rating</th>
              <th>Website</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {lastFiveNames.map((name, index) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{lastFivePhones[index]}</td>
                <td>{lastFiveRatings[index]}</td>
                <td><a href={lastFiveWebsites[index]}>{lastFiveWebsites[index]}</a></td>
                <td><img src={lastFivePhotos[index]} alt={name} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
        {/* if it is BYRATING, do the first 5 */}
      {selectedValue === 'BYRATING' && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Rating</th>
              <th>Website</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {firstFiveNames.map((name, index) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{firstFivePhones[index]}</td>
                <td>{firstFiveRatings[index]}</td>
                <td><a href={firstFiveWebsites[index]}>{firstFiveWebsites[index]}</a></td>
                <td><img src={firstFivePhotos[index]} alt={name} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </>
  );
};

  


export default SearchBar_page;