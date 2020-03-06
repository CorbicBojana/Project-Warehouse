import React from "react";

import NavBar from "../components/NavBar";
import Warehouse from "./components/Warehouse";

function LandingPage() {
  return (
    <div className="container">
      <NavBar />
      <Warehouse />
    </div>
  );
}

export default LandingPage;
