import React from "react";
import { Link } from "../router";

export const Footer = () => {
  return (
    <div className="Footer">
      <Link to="/">ALL</Link>
      <Link to="/active">Active</Link>
      <Link to="/complete">Complete</Link>
    </div>
  );
};
