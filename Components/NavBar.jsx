import React from "react";
import { Navbar, Nav, NavDropdown, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Setu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/login">Login</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/LatestMovies">Popular/Latest Movies</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="Favouritemovies">
                  <Link to="/Favouritemovies">Favourite Movies</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
