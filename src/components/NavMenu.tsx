import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Authentication from './Authentication';
import { useAuth0 } from '@auth0/auth0-react';

const NavMenu=()=>{
    const {isAuthenticated} = useAuth0(); 
    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">Online School Application</NavbarBrand>
                    <NavbarToggler className="mr-2"/>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/counter">Actitities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/counter">Subjects</NavLink>
                            </NavItem>
                            {isAuthenticated?
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/GeneralDashboard">Dashboard</NavLink>
                            </NavItem>:""}
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/fetch-data">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark">{isAuthenticated ? "Logout " : "Login "}<Authentication /></NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default NavMenu;
