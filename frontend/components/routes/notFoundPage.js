import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => (
  <div>
    <h1>The page you're looking for is not here</h1>
    <p>Apologies, please return back to the main page</p>
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default NotFound;
