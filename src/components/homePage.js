import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
<Link
        to="/about"
        style={{
          display: "block",
          marginTop: "1rem",
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Go to about page
      </Link>
    </>
  );
}

export default HomePage;
      