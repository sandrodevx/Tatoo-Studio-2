import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Spinner, Alert, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faImage } from '@fortawesome/free-solid-svg-icons';

const AIImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSimulationInfo, setShowSimulationInfo] = useState(true);
  const [activeTab, setActiveTab] = useState('demo');

  // Array de imágenes de tatuajes de ejemplo
  const tattooImages = [
    'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1596794032910-99818bc3f446?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1569385210018-127685230669?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1560707854-fb9a10ced4e7?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1614107111810-a1357477be56?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1612624971229-4ca9f71cade0?w=500&h=500&fit=crop'
  ];

  // Esta es una función simulada para generar imágenes
  const generateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      setError('Por favor, ingresa una descripción');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Esto es solo para demostración
      // Simula un tiempo de carga para dar la sensación de que está procesando
      setTimeout(() => {
        // Seleccionamos una imagen aleatoria del array
        const randomIndex = Math.floor(Math.random() * tattooImages.length);
        setGeneratedImage(tattooImages[randomIndex]);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError('No pudimos generar tu imagen. Inténtalo de nuevo.');
      setLoading(false);
    }
  };

  // Función para abrir Adobe Firefly con el prompt
  const openFirefly = () => {
    if (!prompt.trim()) {
      setError('Por favor, ingresa una descripción para tu tatuaje');
      return;
    }
    
    // Adobe Firefly no permite pasar el prompt directamente en la URL,
    // pero podemos abrir la página para que el usuario copie su prompt
    window.open('https://firefly.adobe.com/generate/images', '_blank');
  };

  return (
    <section id="ai-generator" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Generador de Ideas con IA</h2>
        
        {showSimulationInfo && (
          <Alert variant="info" dismissible onClose={() => setShowSimulationInfo(false)} className="mb-4">
            <Alert.Heading>Dos opciones para generar imágenes</Alert.Heading>
            <p>
              Ofrecemos dos formas de generar ideas para tu tatuaje:
            </p>
            <ul>
              <li><strong>Demostración:</strong> Muestra ejemplos de tatuajes predefinidos de manera instantánea</li>
              <li><strong>Adobe Firefly:</strong> Te permite usar Adobe Firefly para crear imágenes únicas basadas en tu descripción</li>
            </ul>
          </Alert>
        )}
        
        <p className="text-center mb-4">
          ¿No sabes qué tatuarte? Nuestro generador de imágenes puede ayudarte a encontrar inspiración.
          Describe lo que buscas y te mostraremos ideas basadas en tus palabras.
        </p>
        
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow">
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Describe el tatuaje que imaginas</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ej: Un león geométrico en estilo minimalista con detalles de mandala"
                  />
                </Form.Group>
                
                {error && <p className="text-danger">{error}</p>}
                
                <Tabs
                  activeKey={activeTab}
                  onSelect={(k) => k && setActiveTab(k)}
                  className="mb-3"
                >
                  <Tab eventKey="demo" title="Demostración">
                    <p className="text-muted small mb-3">
                      Esta opción muestra diseños de ejemplo seleccionados de nuestra galería.
                    </p>
                    <Form onSubmit={generateImage}>
                      <div className="d-grid">
                        <Button 
                          variant="primary" 
                          type="submit" 
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-2"
                              />
                              Generando...
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faImage} className="me-2" />
                              Mostrar Ejemplo
                            </>
                          )}
                        </Button>
                      </div>
                    </Form>
                  </Tab>
                  <Tab eventKey="firefly" title="Adobe Firefly">
                    <p className="text-muted small mb-3">
                      Utiliza Adobe Firefly para crear diseños únicos basados en tu descripción.
                    </p>
                    <div className="d-grid">
                      <Button 
                        variant="success" 
                        onClick={openFirefly}
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                        Generar con Adobe Firefly
                      </Button>
                    </div>
                    <p className="text-muted small mt-2">
                      1. Haz clic en el botón para abrir Adobe Firefly<br />
                      2. Copia y pega tu descripción en Firefly<br />
                      3. Genera y guarda tu imagen<br />
                      4. Compártela con nosotros por WhatsApp para consultar
                    </p>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {generatedImage && activeTab === 'demo' && (
          <Row className="justify-content-center mt-5">
            <Col md={8} lg={6}>
              <Card className="shadow">
                <Card.Img variant="top" src={generatedImage} alt="Imagen generada por IA" />
                <Card.Body>
                  <Card.Title>Tu diseño inspirador</Card.Title>
                  <Card.Text>Basado en: "{prompt}"</Card.Text>
                  <div className="d-flex justify-content-between flex-wrap gap-2">
                    <Button variant="outline-primary" onClick={() => window.open(generatedImage, '_blank')}>
                      Ver en tamaño completo
                    </Button>
                    <Button 
                      variant="success" 
                      href={`https://wa.me/+34600000000?text=${encodeURIComponent('Hola, me interesa este diseño de tatuaje basado en: ' + prompt)}`} 
                      target="_blank"
                    >
                      Consultar por WhatsApp
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default AIImageGenerator; 