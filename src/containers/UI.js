import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const UI = (props) => {
    return (
        <div className="ui">
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <main style={(props.background !== '') ? {'background-image': `url(${props.background})`} : null} className='d-flex align-items-center'>
                <Container>
                    {props.children}
                </Container>
            </main>
            <footer>
                <Container>

                </Container>
            </footer>
        </div>
    );
}

export default UI;