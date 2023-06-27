import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { username, password, confirmPassword, email } = formData;

  return (
    <Container>
      <Row>
        <Col>
          <h1>Exe Scissors</h1>
          <p>Register to start shortening your links</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control
                className="signup-form"
                type="text"
                placeholder="Enter username"
                name="username"
                value={username}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label"> Email Address</Form.Label>
              <Form.Control
                className="signup-form"
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                className="signup-form"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="signup-form"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <Button variant="primary" type="submit" className="mt-3 ">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
