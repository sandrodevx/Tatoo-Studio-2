import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Datos de los artistas
const artists = [
  {
    id: 1,
    name: 'María Rodríguez',
    specialty: 'Acuarela y Neotradicional',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format',
    instagram: '@maria_tattoo',
    bio: 'Especializada en acuarela y técnicas de color vibrantes. Con 7 años de experiencia, ha desarrollado un estilo único lleno de vida y movimiento.'
  },
  {
    id: 2,
    name: 'Carlos Hernández',
    specialty: 'Blackwork y Geométrico',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format',
    instagram: '@carlos_blacktattoo',
    bio: 'Maestro del blackwork y los diseños geométricos. Su precisión y atención al detalle lo han convertido en un referente del estilo minimalista y contemporáneo.'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    specialty: 'Realismo y Retratos',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format',
    instagram: '@ana_realism',
    bio: 'Especialista en retratos hiperrealistas y técnicas avanzadas de sombreado. Su capacidad para capturar las expresiones y detalles la han posicionado como una de las mejores en su campo.'
  }
];

const Artists: React.FC = () => {
  return (
    <section id="artists" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5">Nuestro Equipo</h2>
          <p className="lead text-muted">Conoce a los artistas que darán vida a tus ideas</p>
        </div>
        
        <Row xs={1} md={3} className="g-4">
          {artists.map(artist => (
            <Col key={artist.id}>
              <Card className="h-100 shadow artist-card border-0">
                <div className="text-center pt-4">
                  <div className="position-relative mx-auto" style={{ width: '150px', height: '150px' }}>
                    <Card.Img 
                      variant="top" 
                      src={artist.image} 
                      className="rounded-circle" 
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        border: '5px solid rgba(0,0,0,0.05)'
                      }}
                    />
                  </div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold fs-4">{artist.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{artist.specialty}</Card.Subtitle>
                  <Card.Text>{artist.bio}</Card.Text>
                  <a href={`https://instagram.com/${artist.instagram.replace('@', '')}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-decoration-none text-dark d-inline-block mt-2">
                    <FontAwesomeIcon icon={faInstagram} className="me-2" size="lg" />
                    {artist.instagram}
                  </a>
                </Card.Body>
                <div className="card-footer bg-white border-0 text-center pb-4">
                  <a href={`https://wa.me/+34600000000?text=${encodeURIComponent(`Hola, me gustaría consultar por un tatuaje con ${artist.name}`)}`} 
                     className="btn btn-outline-success btn-sm" 
                     target="_blank"
                     rel="noopener noreferrer">
                    Consultar disponibilidad
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Artists; 