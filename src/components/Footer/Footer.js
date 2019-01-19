import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer-container">
      <Jumbotron className="footer-jumbotron">
        <Row style={{ textAlign: "center" }}>
          <Col sm="6" md="3" lg="3" xs="6">
            <h5>Quick Links</h5>
            <ul className="footer-links__quick">
              <li>
                <Link to="/articles">All Articles</Link>
              </li>
              <li>
                <Link to="/add">Add Article</Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
              <li>
                <Link to="/carrers">Carrers</Link>
              </li>
            </ul>
          </Col>
          <Col sm="6" md="3" lg="3" xs="6">
            <h5>Popular Articles</h5>
            <ul className="footer-links__popular">
              <li>
                <Link to="article/123">Article 1</Link>
              </li>
              <li>
                <Link to="article/1255">Article 2</Link>
              </li>
              <li>
                <Link to="article/435">Article 3</Link>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="6" lg="6" xs="12" style={{ textAlign: "left" }}>
            <h4>About us</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              aspernatur, voluptatibus quod officiis impedit asperiores unde
              incidunt eveniet quibusdam minima recusandae velit, doloremque
              sunt nisi!
            </p>
          </Col>
        </Row>
        <hr />
        <div style={{ textAlign: "center" }}>
          <span className="footer-bottom">
            &copy;{" "}
            <a className="footer-bottom__link" href="https://ecehub.in">
              ECEhub.in
            </a>{" "}
            | All rights reserved
          </span>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Footer;
