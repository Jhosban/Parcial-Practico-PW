import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <Navbar className="navbar" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Agenda Telefonica</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Created by: Jhosban
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}    