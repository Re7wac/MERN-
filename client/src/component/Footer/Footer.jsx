import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="row">
        <div className="col-sm-12 col-md-2"></div>
        <div className="col-sm-12 col-md-3">
          <h6>About</h6>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ad
            cum culpa adipisci placeat officiis nemo id ab excepturi quisquam,
            cumque, voluptates incidunt asperiores quaerat quis quia alias,
            autem sit!
          </p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/category/c-language/">
                Living in Germany
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/front-end-development/">
                Education
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/back-end-development/">
                Germany Law
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/java-programming-language/">
                Learn German
              </a>
            </li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Contact Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright &copy; 2020 All Rights Reserved by
            <Link to="#">
              Deutschland <strong>Tür</strong>
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
