import React from 'react';
import { container, Form, Button, Row, Col, Container } from 'react-bootstrap';

function ResetPasswordPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Reset Password</h1>
                    <Form>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' />
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' placehoder='Confirm password' />
                        </Form.Group>
                        <Button type='submit' variant='primary' disabled="True">
                            Reset Password
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ResetPasswordPage;