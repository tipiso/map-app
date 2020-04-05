import React from "react";
import './Navbar.css';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function Navigation(props) {

  return (
    <>
      <Navbar className="bg-custom" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Map-app
          </NavbarBrand>
          <button className="navbar-toggler" id="navbarNav" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNav">
            <Nav navbar>
              <NavItem
                className={props.activeComponent === "Map" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  onClick={e => props.changeActiveComponent("Map")}>
                  Map <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem
                className={props.activeComponent === "Table" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  onClick={e => props.changeActiveComponent("Table")}>
                  Modify pointers
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;