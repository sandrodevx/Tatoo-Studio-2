import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

// Datos simulados de la galería
const galleryItems = [
  {
    id: 1,
    title: 'Tribal Espalda',
    description: 'Diseño tribal para espalda completa',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&auto=format',
    category: 'tribal'
  },
  {
    id: 2,
    title: 'Mandala Color',
    description: 'Mandala colorido con técnica de acuarela',
    image: 'https://images.unsplash.com/photo-1596794032910-99818bc3f446?w=600&auto=format',
    category: 'color'
  },
  {
    id: 3,
    title: 'Retrato Realista',
    description: 'Retrato hiperrealista en escala de grises',
    image: 'https://images.unsplash.com/photo-1569385210018-127685230669?w=600&auto=format',
    category: 'realismo'
  },
  {
    id: 4,
    title: 'Tradicional Americano',
    description: 'Estilo Old School con diseño de ancla',
    image: 'https://images.unsplash.com/photo-1560707854-fb9a10ced4e7?w=600&auto=format',
    category: 'tradicional'
  },
  {
    id: 5,
    title: 'Minimalista',
    description: 'Diseño geométrico de líneas finas',
    image: 'https://images.unsplash.com/photo-1614107111810-a1357477be56?w=600&auto=format',
    category: 'minimalista'
  },
  {
    id: 6,
    title: 'Japonés Tradicional',
    description: 'Dragón en estilo irezumi japonés',
    image: 'https://images.unsplash.com/photo-1612624971229-4ca9f71cade0?w=600&auto=format',
    category: 'japones'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalShow, setModalShow] = useState(false);
  
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalShow(true);
  };
  
  return (
    <section id="gallery" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5">Oh My Gallery</h2>
          <p className="lead text-muted">Nuestros mejores trabajos seleccionados para ti</p>
        </div>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          {galleryItems.map((item) => (
            <Col key={item.id}>
              <Card className="gallery-card h-100 shadow-sm">
                <div 
                  className="gallery-image-container"
                  onClick={() => handleImageClick(item.image)}
                  style={{ 
                    cursor: 'pointer',
                    overflow: 'hidden',
                    height: '300px'
                  }}
                >
                  <Card.Img 
                    variant="top" 
                    src={item.image} 
                    alt={item.title} 
                    className="gallery-image"
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <span className="badge bg-secondary">{item.category}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Button variant="outline-dark">Ver Galería Completa</Button>
        </div>
        
        {/* Modal para vista ampliada */}
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Detalle del Diseño
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-0">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Tattoo design" 
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} 
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button 
              variant="success" 
              href={`https://wa.me/+34600000000?text=${encodeURIComponent('Hola, me interesa este diseño de tatuaje')}`} 
              target="_blank"
            >
              Consultar por WhatsApp
            </Button>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Gallery; 