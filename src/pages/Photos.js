import AboutHeader from "components/global/AboutHeader";
import HNHelmet from "components/global/HNHelmet";
import Footer from "components/global/Footer.js";
import HNNavbar from "components/global/Navbar.js";
import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Photos() {
  return (
    <>
      <HNHelmet
        page="Photos"
        description="Taken on Nikon D3500"
      />
      <HNNavbar />

      <div className="wrapper">
        <AboutHeader title={"Pictures"} image={"assets/img/me.png"} />

        {/* Informational Section */}
        <div className="section section-about-us full-page">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h4 style={{ fontSize: "24px" }}>Credit</h4>
                <h5 className="description">
                  Photos
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
