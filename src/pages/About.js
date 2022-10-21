import AboutHeader from "components/global/AboutHeader";
import HNHelmet from "components/global/HNHelmet";
import Footer from "components/global/Footer.js";
import HNNavbar from "components/global/Navbar.js";
import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function About() {
  return (
    <>
      <HNHelmet
        page="About Me"
        description="Who Am I?."
      />
      <HNNavbar />

      <div className="wrapper">
        <AboutHeader title={"About Me"} image={"assets/img/me.png"} />

        {/* Informational Section */}
        <div className="section section-about-us full-page">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h4 style={{ fontSize: "24px" }}>About Me</h4>
                <h5 className="description">
                  I'm Hannah. Nice to meet you!
                </h5>

                <h4 style={{ fontSize: "24px" }}>Technical</h4>
                <h5 className="description">
                  Information about me - technical summary
                </h5>

                <h4 style={{ fontSize: "24px" }}>Projects</h4>
                <h5 className="description">
                  Some software projects :)
                </h5>
                
                <h4 style={{ fontSize: "24px" }}>Creative</h4>
                <h5 className="description">
                  Portfolio - photos/art/writing?
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
