import React, { Component } from 'react';
import {
    Container,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

class TableNav extends Component {
  render() {
    return (
      <div>
        <Container>
            <Nav>
                <NavItem>
                    <NavLink href="#">Conference</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"> Link</NavLink>
                </NavItem>
            </Nav>

        </Container>
        
        
      </div>
    )
  }
}

export default TableNav;