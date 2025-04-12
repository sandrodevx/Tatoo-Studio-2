import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section 
      className="py-5 d-flex align-items-center position-relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1560106824-ab989cd674e2?auto=format&w=1600) center/cover no-repeat',
        color: 'white'
      }}
    >
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={8}>
            <h1 className="display-3 fw-bold mb-4">OH MY GOD TATTOO STUDIO</h1>
            <p className="lead fs-4 mb-5">
              Convirtiendo tus ideas en arte corporal desde 2010. 
              Nuestro equipo de artistas especializados está listo para crear 
              el diseño perfecto que refleje tu personalidad.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button 
                href="https://wa.me/+34600000000" 
                target="_blank" 
                size="lg" 
                variant="success"
                className="px-4 py-3"
              >
                Reserva tu cita
              </Button>
              <Button 
                href="#gallery" 
                size="lg" 
                variant="outline-light"
                className="px-4 py-3"
              >
                Ver nuestros trabajos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4">
        <a href="#ai-generator" className="text-white">
          <div className="d-flex flex-column align-items-center">
            <span className="mb-2">Descubre más</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="bounce">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 