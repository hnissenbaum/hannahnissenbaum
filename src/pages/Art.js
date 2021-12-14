import AboutHeader from "components/global/AboutHeader";
import HNHelmet from "components/global/HNHelmet";
import Footer from "components/global/Footer.js";
import HNNavbar from "components/global/Navbar.js";
import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Art() {
  return (
    <>
      <HNHelmet
        page="Contact"
        description="Want to get in contact?"
      />
      <HNNavbar />

      <div className="wrapper">
        <AboutHeader title={"About Me"} image={"assets/img/me.png"} />

        {/* Informational Section */}
        <div className="section section-about-us full-page">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h4 style={{ fontSize: "24px" }}>Contact</h4>
                <h5 className="description">
                  If you'd like to contact me, please send an email to _____! Thank you for your interest!
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
