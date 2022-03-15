import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

import Title from './components/Title';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Navigation />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
      
    </div>
  );
}

export default App;
