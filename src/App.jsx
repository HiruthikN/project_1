/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // Added 'React' and corrected import statement
import { Container, Form, Button } from 'react-bootstrap'; // Corrected 'react-dom' to 'react-bootstrap'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
    
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
