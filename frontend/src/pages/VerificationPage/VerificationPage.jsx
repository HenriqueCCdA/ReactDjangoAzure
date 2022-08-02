import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VerificationPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Email verified</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    Thank you for verifying your email. You can now <Link to='/login'>Log in</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default VerificationPage;