import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactCTA: React.FC = () => {
  // Número de WhatsApp (se puede cambiar por el número real)
  const whatsappNumber = '+34600000000';
  const whatsappMessage = '¡Hola! Me gustaría reservar una cita para un tatuaje.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section 
      className="py-5"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1580651214613-f4692d6d138f?auto=format&w=1600) center/cover no-repeat fixed',
        color: 'white'
      }}
    >
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="display-5 mb-4">¿Listo para tu próximo tatuaje?</h2>
            <p className="lead mb-5">
              Contáctanos por WhatsApp para agendar una consulta gratuita. 
              Nuestro equipo de artistas está listo para hacer realidad tu visión.
            </p>
            <Button 
              href={whatsappLink} 
              target="_blank" 
              size="lg" 
              variant="success"
              className="px-4 py-3"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="me-2" size="lg" />
              Contactar por WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactCTA; 