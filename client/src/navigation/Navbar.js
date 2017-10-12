import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


// const API_URL = process.env.REACT_APP_API_URL

const NavbarTest = () => (
    <div>
        <Navbar style={{ marginBottom: 0 }} inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Food Journey</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to='/' exact >
                    <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to='/dashboard'>
                    <NavItem eventKey={2}>Dashboard</NavItem>
                </LinkContainer>
                <LinkContainer to='/overview'>
                    <NavItem eventKey={3}>Overview</NavItem>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default NavbarTest;