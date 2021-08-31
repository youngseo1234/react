import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-5">
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <ul className="list-group list-unstyled mb-0 h5">
            <li>
              <Link to="/" className="navbar-brand">
                링크1
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar-brand">
                링크2
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar-brand">
                링크3
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar-brand">
                링크4
              </Link>
            </li>
          </ul>
        </Container>
        <Container>
          <ul className="list-group list-unstyled mb-0 h5">
            <li>
              <Link to="/" className="navbar-brand">
                링크5
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar-brand">
                링크6
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar-brand">
                링크7
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar-brand">
                링크8
              </Link>
            </li>
          </ul>
        </Container>
        <div className="text-light justify-content-end">
          © 2021 Copyright&nbsp;
          <Link to="/" className="navbar-brand text-primary">
            ezco.com
          </Link>
        </div>
      </Navbar>
    </div>
  );
};
export default Footer;
