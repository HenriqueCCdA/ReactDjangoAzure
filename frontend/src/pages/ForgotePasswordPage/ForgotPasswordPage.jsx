import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ForgotPasswordPage() {

    const [formEmail, setFormEmail] = useState();
    const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);

    useEffect(() => {
        if (formEmail) {
            setSubmitButtonEnabled(true);
        } else {
            setSubmitButtonEnabled(false);
        }
    }, [formEmail]);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Forgot Password?</h1>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                defaultValue={formEmail}
                                onChange={e => setFormEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Button type='submit' variant='primary' disabled={!submitButtonEnabled}>
                            Reset Password
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/login/'>Login</Link> if you have an account already!
                </Col>
                <Col>
                    Are you a new membre ? <Link to='/register/'>Register</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPasswordPage;