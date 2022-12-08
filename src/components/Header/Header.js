import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom'
import "./Header.css"

function Header() {
  const navigate=useNavigate();
  function logout(){
    localStorage.clear();
    navigate("/login");
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Nikk-Flix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex flex-lg-row justify-content-lg-center align-items-center">
            <Nav.Link as={Link} to="/movies/popular">Popular</Nav.Link>
            <Nav.Link as={Link} to="/movies/top_rated">Top-rated</Nav.Link>
            <Nav.Link as={Link} to="/movies/upcoming">Upcoming</Nav.Link>
            {
              (localStorage.getItem("email"))?
                <Nav.Link><button className='btn bg-primary text-light' onClick={logout}>Logout</button></Nav.Link>
                :
                <>
               <Nav.Link as={Link} to="/login"><button className="btn nik-btn btn-color text-light">login</button></Nav.Link>
              <Nav.Link as={Link} to="/register"><button className="btn btn-color text-light">Register</button></Nav.Link></>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;