import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


// import { View, Text, StyleSheet, Image, TextInput, Pressable, Keyboard } from 'react-native';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="http://localhost:3000/">I'm not Latte</Navbar.Brand>
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
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// const styles=StyleSheet.create({
//   Page: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "white",
//     paddingHorizontal: 20
// },
// Header: {
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     marginTop: 30,
//     marginBottom: 20
// },
// HeaderText: {
//     fontSize: 25,
//     marginRight: 10,
//     color: "#185f56"
// },
// HeaderImage: {
//     width: 75,
//     height: 75
// },
// inputHeader: {
//     fontSize: 20,
//     marginTop: 10,
//     marginBottom: 10,
//     color: "#185f56",
//     fontWeight: "500"
// },
// input: {
//     height: 475,
//     fontSize: 20,
//     borderRadius: 10,
//     padding: 10,
//     backgroundColor: "#3dc1b0",
//     color: "#185f56"
// },
// statusBar: {
//     height: 40,   
// },
// submitButtons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//     marginTop: 20
// },
// submitButton: {
//     height: 50,
//     width: 100,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#185f56"
// },
// submitButtonImage: {
//     width: 25,
//     height: 25,
//     tintColor: "white"
// },
// submitButtonActive: {
//     height: 50,
//     width: 100,
//     borderRadius: 10,
//     backgroundColor: "red",
//     justifyContent: "center",
//     alignItems: "center"
// }
// })

export default NavScrollExample;