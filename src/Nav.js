import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Nav>
                    <Link className="navbar-brand" to={'/'}>Wedding Invitation</Link>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#countdown">Count Down</Nav.Link>
                        <Nav.Link href="#address">Address</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#time-line">Time Line</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#map">Location</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default NavBar;
