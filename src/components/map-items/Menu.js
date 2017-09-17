import React from 'react'
import './Menu.css'
import {
    Nav,
    Navbar,
    NavItem,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Menu = () => (
            <Navbar fluid>
                <Nav>
                    <LinkContainer exact to="/favs">
                        <NavItem>Favs</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/stops">
                        <NavItem>Stops</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/lines">
                        <NavItem>Lines</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/schedules">
                        <NavItem>Schedules</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/log">
                        <NavItem>Log</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
);

export default Menu