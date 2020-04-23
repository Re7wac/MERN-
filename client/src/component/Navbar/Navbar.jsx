// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navBar ">
//       <nav className="navbar navbar-expand-lg navbar-dark Header HoverEffect bg-dark">
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto ">
//             <li className="nav-item active">
//               <Link className="nav-link" to="/Home">
//                 HOME <span className="sr-only">(current)</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Service">
//                 SERVICE
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/Support">
//                 ContactUs
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/contactUs">
//                 CONTACT US
//               </Link>
//             </li>
//           </ul>

//           <div className="dropdown">
//             {/* <button
//               className="btn btn-dark btn-sm"
//               type="button"
//               id=""
//               data-toggle=""
//             >
//               Sign in
//             </button> */}
//             <button
//               className="btn btn-dark btn-sm dropdown-toggle"
//               type="button"
//               id="dropdownMenuButton"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Sign In
//             </button>

//             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <Link className="dropdown-item" to="/login">
//                 Login
//               </Link>
//               <Link className="dropdown-item" to="/register">
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavgationBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">RE7</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/Re7wac">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Service
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Contect</DropdownItem>
                <DropdownItem></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Link to="/login">
            <Button className="btn-light">Sign In</Button>
          </Link>
          {/* <NavItem>
            <NavLink className="btn-light" herf="/">
              Sign In
            </NavLink>
          </NavItem> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavgationBar;
