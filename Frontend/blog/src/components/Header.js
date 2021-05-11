import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";



const Header = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                MySite
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/AddPost" class="nav-link">
                New Post
              </Link>
            </li>
          </ul>
           
        </div>
      </nav>
    );
};

export default Header;