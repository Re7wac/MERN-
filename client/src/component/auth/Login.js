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

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
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
        <Form
          className="mt-5"
          noValidate
          onSubmit={this.onSubmit}
          action="/examples/actions/confirmation.php"
          method="post"
        >
          <FormText className="text-center m-auto w-25 h2 ">Sign In</FormText>
          <hr className="w-25" />

          <Col className="text-center social-btn m-auto w-25 ">
            <Link href="#" className="btn btn-primary btn-block">
              <i className="fa fa-facebook"></i> Sign in with <b>Facebook</b>
            </Link>
            <Link href="#" className="btn btn-info btn-block">
              <i className="fa fa-twitter"></i> Sign in with <b>Twitter</b>
            </Link>
            <Link href="#" className="btn btn-danger btn-block">
              <i className="fa  fa-google"></i> Sign in with <b>Google</b>
            </Link>
          </Col>
          <hr className="w-25" />
          <Col>
            <FormGroup className="m-auto w-25">
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
          </Col>
          <Col>
            <FormGroup className="m-auto w-25">
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
              <hr className="w-25" />
              {/* <Button className="btn btn-block"> Regester </Button> */}
            </FormGroup>
            <Col className="m-auto w-25 ">
              <Button className="btn btn-block btn-light">
                <Link to="/dashboard" className="text-dark">
                  Login
                </Link>
              </Button>
            </Col>
          </Col>
        </Form>
        <hr className="w-25" />
        <Col className="m-auto w-25 clearfix">
          <Label>
            <Input type="checkbox" />
            Remmber me
          </Label>
          <span className="ml-1">||</span>
          <Link href="#" className="ml-2 text-success">
            Forget Password
          </Link>
        </Col>
        <hr className="w-25" />

        <Col className="hint-text small m-auto w-25">
          Don't have an account ?
          <Link to="/register" className="text-success ml-1">
            Register Now!
          </Link>
        </Col>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
