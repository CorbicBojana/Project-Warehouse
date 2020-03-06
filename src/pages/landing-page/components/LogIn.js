import React from "react";

import { Link } from "react-router-dom";

function LogIn() {
  return (
    <Link to="/LogIn">
      <button className="button">Log In</button>
    </Link>
  );
}

export default LogIn;
