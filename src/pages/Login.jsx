/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "../styles/Login.css"
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const Login = () => {
  const [formdata, setFormData] = useState({
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
        
        <h1>Login</h1>
        <Form>
          <Form.Group controlId="Email" required>
            <Form.Label>email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="Password" required>
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className='text-center'>
          <Button bsPrefix="super-btn" variant="primary">
          Login
        </Button></div>
            
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
