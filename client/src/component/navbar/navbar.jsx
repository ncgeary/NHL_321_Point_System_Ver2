import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar color="dark"
                    dark expand="sm"
                    className="mb-5" >
                    <Container>
                        <NavbarBrand href="/" > NHL 321 Point System </NavbarBrand>

                        <NavbarToggler onClick={
                            this.toggle
                        } />
                        <Collapse isOpen={
                            this.state.isOpen
                        } navbar >
                            <Nav className="ml-auto" navbar >
                                < NavItem >
                                    <NavLink href="https://ncgeary.github.io/NHL_321_PointSystem/" rel="noopener noreferrer" target="_blank">Previous Site</NavLink>
                                </NavItem>
                                < NavItem >
                                    <NavLink href="https://github.com/ncgeary/nhl_mern" rel="noopener noreferrer" target="_blank" >Github Repo</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;