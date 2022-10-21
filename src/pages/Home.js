import HNHelmet from "components/global/HNHelmet";
import Footer from "components/global/Footer.js";
import HNNavbar from "components/global/HNNavbar.js";
import PageHeader from "components/global/PageHeader.js";
import {pageHeaderDescription, pageHeaderTitle } from "constants/home";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(
    window.innerWidth < 800 ? "auto" : "640px"
  );

  function handleResize() {
    setWidth(window.innerWidth < 800 ? "auto" : "640px");
  }

  useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    window.addEventListener("resize", handleResize);

    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <HNHelmet
        page="Home"
        description="Welcome to my website!"
      />
      <HNNavbar />

      <div className="wrapper">
        {/* Page Header */}
        <PageHeader
          title={pageHeaderTitle}
          paragraph={pageHeaderDescription}
        />
        <Footer />
      </div>
    </>
  );
}
