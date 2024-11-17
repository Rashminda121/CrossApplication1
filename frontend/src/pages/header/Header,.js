import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar variant="secondary">
        <Container>
          <Navbar.Brand to="/">
            <strong>Employee Management System</strong>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link border border-white rounded"
            >
              Employees
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/employee"
              className="nav-link border border-white rounded"
            >
              Add Employees
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
