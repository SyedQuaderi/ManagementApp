import React from 'react';
import {Container, Form, Col, Row, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

function AddWard() {
    return (
        <Container fluid={true} className="add-ward-main">
            <Row className="mt-5">
                <Col xs={2} md={2}>
                </Col>
                <Col xs={6} md={6}>
                <Form>
                <h2 className="text-center">Add Room</h2>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2} className="text-right">
                    Room Name
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control type="text" placeholder="Room Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2} className="text-right">
                    Assign Ward
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control type="text" placeholder="Assign Ward to Room No." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 9, offset:2 }}>
                    <Link to="/Settings/Clients"><Button type="submit" className="add-ward-btn">Add</Button></Link>
                    </Col>
                </Form.Group>
                </Form>
                </Col>
                <Col xs={2} md={2}></Col>
            </Row>
        </Container>
    )
}

export default AddWard;
