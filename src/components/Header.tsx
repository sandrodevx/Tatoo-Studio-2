import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  // Número de WhatsApp (se puede cambiar por el número real)
  const whatsappNumber = '+34600000000';
  const whatsappMessage = '¡Hola! Me gustaría reservar una cita para un tatuaje.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          Oh My God Tattoo Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#gallery">Galería</Nav.Link>
            <Nav.Link href="#artists">Tatuadores</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
          </Nav>
          <Button 
            variant="success" 
            href={whatsappLink} 
            target="_blank" 
            className="ms-3 d-flex align-items-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
            Reservar Cita
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 