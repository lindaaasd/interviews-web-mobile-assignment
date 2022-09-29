import React from "react";
import logo from "./logoxtream.jpg";
import { Link } from "react-router-dom";
import Button from "../../style/Button.style";

const Header = () => {
  return (
    <nav className="navbar container">
      <div className="row justify-content-between align-items-center w-100">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo xtream" width="100" height="100" />
          </Link>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <Link to="/posts">
            <Button fontSize="xx-large">Posts</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
