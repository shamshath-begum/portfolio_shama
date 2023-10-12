import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    //  <--Navigation details-->
    <div
      className={`navigation container-fluid ${show && "navigation_shadow"}`}
    >
      <Navbar bg="#0E1630" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand style={{ color: "white", fontSize: "2em" }}>
            <span className="color-green"></span>
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "10em", gap: "3em" }}
              navbarScroll
            >
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "white" }}>
                About
              </Nav.Link>
              <Nav.Link href="#Skills" style={{ color: "white" }}>
                Skills
              </Nav.Link>
              <Nav.Link href="#Projects" style={{ color: "white" }}>
                Projects
              </Nav.Link>
              <Nav.Link href="#Education" style={{ color: "white" }}>
                Education
              </Nav.Link>
              <Nav.Link href="#contact" style={{ color: "white" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;