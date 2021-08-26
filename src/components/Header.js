import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          <img
            src="/favicon.ico"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          EZCOM
        </Link>
        <Navbar.Collapse className="justify-content-center">
          <Link to="/home" className="navbar-brand">
            메뉴링크1
          </Link>
          <Link to="link-1" className="navbar-brand">
            메뉴링크2
          </Link>
          <Link to="link-1" className="navbar-brand">
            메뉴링크3
          </Link>
          <Link to="link-1" className="navbar-brand">
            메뉴링크3
          </Link>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Link to="link-1" className="navbar-brand">
            로그인
          </Link>
          <Link to="link-1" className="navbar-brand">
            회원가입
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
