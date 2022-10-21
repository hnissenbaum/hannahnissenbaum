import React from "react";
import MediaQuery from "react-responsive";

import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

export default function AutoDriveNavbar({ initialState }) {
  const [navbarColor, setNavbarColor] = React.useState(
    initialState || "navbar-transparent"
  );
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    if (initialState !== "navbar") {
      window.addEventListener("scroll", updateNavbarColor);
    }

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, [initialState]);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header>
                <span
                  style={{
                    color: "rgba(181, 181, 181, 0.6)",
                    fontSize: "0.8em",
                    fontWeight: "700",
                  }}
                >
                  Team
                </span>
              </DropdownItem>
              <DropdownItem href="/about">About Me</DropdownItem>
              <DropdownItem href="/tech">Technical Projects</DropdownItem>
              <DropdownItem href="/Resume">Resume</DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem header>
                <span
                  style={{
                    color: "rgba(181, 181, 181, 0.6)",
                    fontSize: "0.8em",
                    fontWeight: "700",
                  }}
                >
                  Portfolio
                </span>
              </DropdownItem>
              <DropdownItem href="/photos">photos</DropdownItem>
              <DropdownItem href="/art">Art</DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem header>
                <span
                  style={{
                    color: "rgba(181, 181, 181, 0.6)",
                    fontSize: "0.8em",
                    fontWeight: "700",
                  }}
                >
                  Social
                </span>
              </DropdownItem>
              <DropdownItem href="https://github.com/hnissenbaum">
                <i className="fab fa-github"></i>
                GitHub
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" href="/">
              Hannah Nissenbaum
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <MediaQuery query="(max-width: 990px)">
              <Nav navbar>
                <NavItem>
                  <NavLink href="/about">
                    <p className="d-lg-none d-xl-none">About Me</p>
                  </NavLink>
                  <NavLink href="/projects">
                    <p className="d-lg-none d-xl-none">Technical Projects</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/resume">
                    <p className="d-lg-none d-xl-none">Resume</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/photos">
                    <p className="d-lg-none d-xl-none">Photos</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/art">
                    <p className="d-lg-none d-xl-none">Art</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </MediaQuery>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
