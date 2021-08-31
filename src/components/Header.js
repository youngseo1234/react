import Dropdown from "react-bootstrap/Dropdown";
import {
  Button,
  ButtonGroup,
  Container,
  DropdownButton,
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
          <DropdownButton
            className="btn btn-dark"
            variant="secondary"
            title="서버"
          >
            <Link to="/" className="dropdown-item">
              링크1
            </Link>
            <Link to="/" className="dropdown-item">
              링크2
            </Link>
            <Link to="/" className="dropdown-item">
              링크3
            </Link>
            <Link to="/" className="dropdown-item">
              링크4
            </Link>
          </DropdownButton>
          <DropdownButton
            className="btn btn-dark"
            variant="secondary"
            title="개발언어"
          >
            <Link to="/" className="dropdown-item">
              링크1
            </Link>
            <Link to="/" className="dropdown-item">
              링크2
            </Link>
            <Link to="/" className="dropdown-item">
              링크3
            </Link>
            <Link to="/" className="dropdown-item">
              링크4
            </Link>
          </DropdownButton>

          <DropdownButton
            className="btn btn-dark"
            variant="secondary"
            title="DB"
          >
            <Link to="/" className="dropdown-item">
              링크1
            </Link>
            <Link to="/" className="dropdown-item">
              링크2
            </Link>
            <Link to="/" className="dropdown-item">
              링크3
            </Link>
            <Link to="/" className="dropdown-item">
              링크4
            </Link>
          </DropdownButton>

          <DropdownButton
            className="btn btn-dark"
            variant="secondary"
            title="운영체제"
          >
            <Link to="/" className="dropdown-item">
              링크1
            </Link>
            <Link to="/" className="dropdown-item">
              링크2
            </Link>
            <Link to="/" className="dropdown-item">
              링크3
            </Link>
            <Link to="/" className="dropdown-item">
              링크4
            </Link>
          </DropdownButton>
        </Navbar.Collapse>

        <Link to="/" className="btn btn-primary btn-sm mr-2">
          로그인
        </Link>
        <Link to="/" className="btn btn-primary btn-sm">
          회원가입
        </Link>
      </Navbar>
    </>
  );
};
export default Header;
