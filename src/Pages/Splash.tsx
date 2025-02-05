import { useState } from 'react';
import { Button, Form, ListGroup, Container, Row, Col } from 'react-bootstrap';

export default function Splash() {
    const [name, setName] = useState('');
    const [names, setNames] = useState<string[]>([]);

    const addName = () => {
        if (name.trim() !== '') {
            setNames([...names, name]);
            setName('');
        }
    };

    const removeName = (index: number) => {
        setNames(names.filter((_, i) => i !== index));
    };

    return (
        <Container className="d-flex flex-column justify-content-start align-items-center" style={{ height: '100vh', marginTop: '100px', maxWidth: '450px' }}>
            <Row className="w-100">
                <Col xs={12} className="d-flex flex-column align-items-center">
                    <h1 style={{ marginBottom: '40px', fontSize: '36px', fontWeight: 'bold' }}>Pooker Score</h1>
                    <Form.Group controlId="formName" className="w-100 mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ textAlign: 'center', fontSize: '18px' }}
                        />
                    </Form.Group>
                    <Button onClick={addName} variant="primary" className="mb-3" style={{ width: '150px', height: '50px', fontSize: '20px' }}>
                        Add
                    </Button>
                    <ListGroup className="w-100" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {names.map((name, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#e9ecef' }}>
                                {name}
                                <Button variant="danger" size="sm" onClick={() => removeName(index)}>x</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}