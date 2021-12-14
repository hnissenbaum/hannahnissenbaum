import { MDBContainer, MDBFooter } from "mdbreact";
import React from "react";

export default function Footer() {
  return (
    <MDBFooter className="font-small mt-4 footer footer-default">
      <MDBContainer fluid className="text-center">
            <h5 className="title">Hannah Nissenbaum</h5>
            <p>
              All information, writing, photos and code on this site are the work and intellectual property of Hannah Nissenbaum.
            </p>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Updated in: {new Date().getFullYear()} by {" "}
          <a href="/">Hannah Nissenbaum</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}