import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegistrationPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let registerButtonEnabled = (name && email && password && confirmPassword);


    return (
        <Container>
            <Row>
                <Col>
                    <h1>Register</h1>
                    <Form>
                        <Form.Group controlId='name'>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Full Name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter Email'
                                value={name}
                                onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={name}
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Confirm password'
                                value={name}
                                onChange={e => setConfirmPassword(e.target.value)} />
                        </Form.Group>
                        <Button type='submit' variant='primary' disabled={!registerButtonEnabled}>Register</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='login'>Sign In</Link> if you have an account already!
                </Col>
            </Row>
        </Container>
    )
}

export default RegistrationPage;