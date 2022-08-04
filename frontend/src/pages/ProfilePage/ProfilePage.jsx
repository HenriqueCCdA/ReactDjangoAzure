import React from 'react';
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useUserDetails } from '../../context/UserContext';


function ProfilePage() {

    const [userDetails] = useUserDetails();
    const [formName, setFormName] = useState(userDetails.name);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>User Profile</h1>
                    <Form>
                        <Form.Group controlId='name'>
                            <Form.Label> Full Name </Form.Label>
                            <Form.Control
                                type='name'
                                placehoder='Enter Full Name'
                                defaultValue={formName}
                                onChange={e => setForm(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Update Password</Form.Label>
                            <Form.Control type="password" placehoder="Update password" />
                        </Form.Group>
                        <Form.Group controlId='ConfirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password"></Form.Control>
                        </Form.Group>
                        <Button type="submit" varient="primary">Update</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage;