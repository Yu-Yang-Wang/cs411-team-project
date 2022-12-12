import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { StyleSheet, Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  Keyboard
} from 'react-native';

import React, { Component }  from 'react';
// import { View, Text, StyleSheet, Image, TextInput, Pressable, Keyboard } from 'react-native';

function NavScrollExample() {
//   const handleNameChange = (name) => {
//     this.setState({ name });
//   }
//   this.state = { name: '' }

//   this.handleNameChange = this.handleNameChange.bind(this);
//   // chandleChange(event){
//   //   let fieldName = event.target.name;
//   //   let fleldVal = event.target.value;
//   //   this.setState({form: {...this.state.form, [fieldName]: fleldVal}})
//   // }
// //   this.handleChange = this.handleChange.bind(this);
// //   this.handleSubmit = this.handleSubmit.bind(this);


// const onChange = (e) => {
//   let inputName = e.target.name;
//   let inputValue = e.target.value;
//   let updatedFormState = Object.assign({}, this.state);
//   updatedFormState.form[inputName].value = inputValue;
//   this.setState(updatedFormState);
//  }
// const handleSubmit = (event) => {

//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="http://localhost:3000">I'm not Latte</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link to="/Home"> Home</Nav.Link> */}
            <Nav.Link href="http://localhost:3000/about">About</Nav.Link>
            <NavDropdown title="Order" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Make an order</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Past orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Summary
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="http://localhost:3000/contact">Contact us</Nav.Link>
            <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
            {/*Adding the search bar */}
            {/* <Nav.Link href="http://localhost:3000/search">Search</Nav.Link>  */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              placeholder='enter' 
              // defaultValue={this.state.form.name}
              // onChange={this.handleChange.bind(this)}
            />
            <Button variant="outline-success">Search</Button>  */}
   
          {/* </Form> */}



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavScrollExample;