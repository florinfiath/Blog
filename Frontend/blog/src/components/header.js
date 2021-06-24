import { React, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import { Container, Button, DropdownButton,Dropdown, Modal } from 'react-bootstrap';
import axios from "axios";

const Header = () => {
    const [signUp, setsignUp] = useState(false);
    const handleCloseSignUp = () => setsignUp(false);
    const handlesignUp = () => setsignUp(true);
    const [signIn, setsignIn] = useState(false);
    const handleCloseSignIn = () => setsignIn(false);
    const handlesignIn = () => setsignIn(true);

    const submit = async () => {
      const user = this;
    try {
      await axios.post("http://localhost:3001/users/", user)
      .then(response => console.log(response.headers));
    } catch (error) {
      console.log(error.response)
    }
    }

    return (
      <Container>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark img-fluid max-width: 100% height: auto nav-container">
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
          <div
            class="collapse navbar-collapse navbar-nav"
            id="navbarNavAltMarkup"
          >
            <div className="floatright">
              <li className="nav-item nav-link active">
                <Link to="/" className="nav-item nav-link active">
                  MySite
                </Link>
              </li>
              <li class="nav-item nav-link">
                <Link to="/AddPost" className="nav-item nav-link active">
                  New Post
                </Link>
              </li>
              <li class="nav-item nav-link">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Register here"
                  variant="primary"
                >
                  <Dropdown.Item
                    className="dropdownButton"
                    onClick={handlesignUp}
                  >
                    Sign Up
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdownButton"
                    onClick={handlesignIn}
                  >
                    Sign In
                  </Dropdown.Item>
                </DropdownButton>
              </li>
              <Modal
                show={signUp}
                onHide={handleCloseSignUp}
                backdrop="static"
                keyboard={false}
                animation={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="modalTitle" onSubmit={submit}>
                    Sign up
                  </Modal.Title>
                </Modal.Header>
                <Container>
                  <Modal.Body>
                    <label for="email" className="labelClass">
                      Email:
                    </label>
                    <input
                      className="inputClass"
                      id="email"
                      name="email"
                      placeholder="enter your email"
                    />
                    <label for="password" className="labelClass">
                      Password:
                    </label>
                    <input
                      className="inputClass"
                      id="password"
                      name="password"
                      placeholder="enter your password"
                    />
                    <label className="labelClass">Confirm Password:</label>
                    <input
                      className="inputClass"
                      placeholder="confirm password"
                    />
                    <Button className="mt-5 modalButton">Sign up</Button>
                  </Modal.Body>
                </Container>

                <Modal.Footer>
                  <p className="modalP">Already have an account?</p>
                  <Button
                    className="modalButton"
                    variant="primary"
                    onClick={handlesignIn}
                  >
                    Sign in here
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={signIn}
                onHide={handleCloseSignIn}
                backdrop="static"
                keyboard={false}
                animation={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="modalTitle mb-4">Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                  <label for="email" className="labelClass">
                    Email:
                  </label>
                  <input
                    className="inputClass"
                    id="email"
                    name="email"
                    placeholder="enter your email"
                  />
                  <label for="password" className="labelClass">
                    Password:
                  </label>
                  <input
                    className="inputClass"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    className="modalButtonSignIn"
                    style={{ marginRight: "auto" }}
                  >
                    Sign In
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </nav>
      </Container>
    );
    };

export default Header;