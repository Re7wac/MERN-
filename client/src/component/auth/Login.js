import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  Container,
  Row,
} from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container>
        <Row>
          <Col className="col-12 col-sm-6 col-lg-4 col-xl-4 m-auto">
            <Form
              className="mt-5"
              noValidate
              onSubmit={this.onSubmit}
              action="/examples/actions/confirmation.php"
              method="post"
            >
              <FormText className="text-center m-auto  h2 ">Sign In</FormText>
              <hr className="w-50" />

              <Link
                to="#"
                className="btn btn-primary btn-block text-center social-btn "
              >
                <i className="fa fa-facebook"></i> Sign in with <b>Facebook</b>
              </Link>
              <Link
                href="#"
                className="btn btn-info btn-block text-center social-btn "
              >
                <i className="fa fa-twitter"></i> Sign in with <b>Twitter</b>
              </Link>
              <Link
                href="#"
                className="btn btn-danger btn-block text-center social-btn "
              >
                <i className="fa  fa-google"></i> Sign in with <b>Google</b>
              </Link>
              <hr />

              <FormGroup>
                <Label for="examplePassword"> Email : </Label>

                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Enter you email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />

                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </FormGroup>
              <FormGroup className="">
                <Label for="examplePassword"> Password </Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter you password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <hr />
                {/* <Button className="btn btn-block"> Regester </Button> */}
              </FormGroup>
              <Button type="submit" className="btn btn-block btn-light">
                <Link to="/" className="text-dark">
                  Login
                </Link>
              </Button>
              <hr />
              <Label>
                <Input type="checkbox" />
                Remmber me
              </Label>
              <span className="ml-1">||</span>
              <Link href="#" className="ml-2 text-success">
                Forget Password
              </Link>
              <hr />
              <FormText>
                {" "}
                Don't have an account ?
                <Link to="/register" className="text-success ml-1">
                  Register Now!
                </Link>
              </FormText>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
