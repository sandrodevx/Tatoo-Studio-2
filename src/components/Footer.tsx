import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Oh My God Tattoo Studio</h5>
            <p>
              Nuestro estudio de tatuajes ofrece servicios de alta calidad, con los mejores artistas y en un ambiente seguro y acogedor.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-white fs-5" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-white fs-5" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://wa.me/+34600000000" target="_blank" rel="noopener noreferrer" className="text-white fs-5" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                Calle Principal 123, Ciudad
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +34 600 000 000
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@ohmygodtattoo.com
              </li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-3">Horario</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Lunes a Viernes: 11:00 - 20:00</li>
              <li className="mb-2">Sábados: 11:00 - 18:00</li>
              <li className="mb-2">Domingos: Cerrado</li>
            </ul>
          </Col>
        </Row>
        
        <hr className="mt-4 mb-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {currentYear} Oh My God Tattoo Studio. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 