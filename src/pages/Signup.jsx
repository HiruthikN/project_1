/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "../styles/Signup.css"
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const Signup = () => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <div>
       <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/Signup">SignUp</Breadcrumb.Item>
        <Breadcrumb.Item href="/Login">Login</Breadcrumb.Item>
      </Breadcrumb> 
      <Container>
        <h1>Register</h1>
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group controlId="ConfirmPassword">
            <Form.Label>confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group> 
          <div className="text-center">
          <Button bsPrefix="super-btn" variant="primary">
          Register
        </Button>
          </div>

          <p>Already Having an Account? <Link to="/login">Login</Link></p>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
