import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="text-center">
              <Image 
                src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400&auto=format"
                roundedCircle 
                className="shadow border border-4 border-secondary" 
                style={{ width: '280px', height: '280px', objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col lg={7}>
            <h2 className="display-5 mb-4">Juan Carlos</h2>
            <p className="lead mb-4">
              Tatuador con más de 15 años de experiencia, apasionado por el arte y especializado en diversos estilos.
            </p>
            <p className="mb-4">
              Con una formación artística sólida y un amor profundo por el tatuaje, Juan Carlos ha perfeccionado su técnica durante más de una década. 
              Su estilo versátil le permite trabajar desde diseños minimalistas hasta retratos hiperrealistas, siempre adaptándose a las necesidades y 
              preferencias de cada cliente.
            </p>
            <p>
              A lo largo de su carrera, ha participado en numerosas convenciones internacionales de tatuaje, 
              ganando reconocimiento por su técnica impecable y su capacidad para transformar ideas en arte corporal único y personalizado.
            </p>
            
            <div className="mt-4">
              <h5>Especialidades:</h5>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge bg-light text-dark">Realismo</span>
                <span className="badge bg-light text-dark">Neo tradicional</span>
                <span className="badge bg-light text-dark">Blackwork</span>
                <span className="badge bg-light text-dark">Geométrico</span>
                <span className="badge bg-light text-dark">Acuarela</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 