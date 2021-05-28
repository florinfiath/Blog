import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";



const Header = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li class="nav-item nav-link active">
              <Link to="/" className="nav-item nav-link active">
                MySite
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/AddPost" className="nav-item nav-link active">
                New Post
              </Link>
            </li>
          </div>
        </div>
      </nav>
    );
};

export default Header;