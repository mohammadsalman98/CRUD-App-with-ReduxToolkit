
//bootstrap imports 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//redux imports 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//react router imports
export default function Navbar_Component() {
    const cartProductnum = useSelector((state) => state.products.cart.reduce((acc, product) => {
        return acc + product.quantity;
    }, 0));
    return (
        <div className="Navbar">
            <Navbar expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Link to='/' style={{ textDecoration: 'none' }}><Navbar.Brand href="#home">Product store </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' style={{ textDecoration: 'none' }}> <Nav.Link href="#home"> Home</Nav.Link></Link>
                            <Link to='/cartpage' style={{ textDecoration: 'none' }}> <Nav.Link href="#cartpage">cart{cartProductnum > 0 && - cartProductnum}</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


