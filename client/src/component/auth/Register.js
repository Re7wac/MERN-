import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container>
        <Row>
          <Col className="col-12 col-sm-6 col-lg-4 col-xl-4 m-auto">
            <Form
              className="mt-5 "
              noValidate
              onSubmit={this.onSubmit}
              action="/examples/actions/confirmation.php"
              method="post"
            >
              <FormText className="text-center m-auto w-25 h2 ">
                Sign Up
              </FormText>
              <hr />
              <FormText className="grey-text text-darken-1 h4">
                Already have an account ?
                <Button className="btn btn-block btn-light">
                  <Link to="/login" className="text-dark">
                    Login
                  </Link>
                </Button>
              </FormText>
              <hr />
              <FormGroup className="m-auto">
                <Label for="name"> Name </Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder="name"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <span className="red-text"> {errors.name} </span>
              </FormGroup>
              <FormGroup>
                <Label for="email"> Email : </Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="text"
                  placeholder="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <span className="red-text"> {errors.email} </span>
              </FormGroup>
              <FormGroup>
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
                <span className="red-text"> {errors.password} </span>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword"> Password: </Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Enter your password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                <span className="red-text"> {errors.password2} </span>
              </FormGroup>
              <hr />
              <Button className="btn btn-block btn-light" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      // <div className="container">
      //   <div className="row">
      //     <div className="col s8 offset-s2">
      //       <Link to="/" className="btn-flat waves-effect">
      //         <i className="material-icons left">keyboard_backspace</i> Back to
      //         home
      //       </Link>
      //       <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //         <h4>
      //           <b>Register</b> below
      //         </h4>
      //         <p className="grey-text text-darken-1">
      //           Already have an account? <Link to="/login">Log in</Link>
      //         </p>
      //       </div>
      //       <form noValidate onSubmit={this.onSubmit}>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.name}
      //             error={errors.name}
      //             id="name"
      //             type="text"
      //             className={classnames("", {
      //               invalid: errors.name,
      //             })}
      //           />
      //           <label htmlFor="name">Name</label>
      //           <span className="red-text">{errors.name}</span>
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.email}
      //             error={errors.email}
      //             id="email"
      //             type="email"
      //             className={classnames("", {
      //               invalid: errors.email,
      //             })}
      //           />
      //           <label htmlFor="email">Email</label>
      //           <span className="red-text">{errors.email}</span>
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password}
      //             error={errors.password}
      //             id="password"
      //             type="password"
      //             className={classnames("", {
      //               invalid: errors.password,
      //             })}
      //           />
      //           <label htmlFor="password">Password</label>
      //           <span className="red-text">{errors.password}</span>
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password2}
      //             error={errors.password2}
      //             id="password2"
      //             type="password"
      //             className={classnames("", {
      //               invalid: errors.password2,
      //             })}
      //           />
      //           <label htmlFor="password2">Confirm Password</label>
      //           <span className="red-text">{errors.password2}</span>
      //         </div>
      //         <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //           <button
      //             style={{
      //               width: "150px",
      //               borderRadius: "3px",
      //               letterSpacing: "1.5px",
      //               marginTop: "1rem",
      //             }}
      //             type="submit"
      //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //           >
      //             Sign up
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  registerUser,
})(withRouter(Register));
