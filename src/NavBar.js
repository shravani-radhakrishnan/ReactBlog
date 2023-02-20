import { Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Shravani RadhaKrishna</Navbar.Brand>
                    <Nav className="me-auto">
                        <Stack direction="horizontal" gap={3}>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/contact">Contact</Link>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar