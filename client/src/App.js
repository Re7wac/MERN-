import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Body from "./component/Body/Body";
import { Container, Row, Col } from "reactstrap";
import SideBar from "./component/SideBar/SideBar";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import Footer from "./component/Footer/Footer";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid className="pr-0 pl-0 fixed-top">
          <Row>
            <Col xs={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Navbar />
            </Col>
          </Row>
        </Container>

        <Container fluid className="pr-0 pl-0 pt-5">
          <Row>
            <Col xs={1}>
              <SideBar />
            </Col>
            <Col className="pl-5" xs={11}>
              <Body />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
