import React from 'react';
import {Container, Form, Col, Row, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

function AddWard() {
    return (
        <Container>
            <h2 className="text-center">Add Room</h2>
            <Row className="mt-5">
                <Col>
                </Col>
                <Col xs={6}>
                <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}>
                    Room Name
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control type="text" placeholder="Room Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}>
                    Assign Ward
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control type="text" placeholder="Assign Ward to Room No." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 9, offset: 3 }}>
                    <Link to="/Settings/Clients"><Button type="submit">Add</Button></Link>
                    </Col>
                </Form.Group>
                </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default AddWard;
