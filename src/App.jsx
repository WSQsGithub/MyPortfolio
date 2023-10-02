import React from 'react';
import ReactDOM from 'react-dom/client';
import '../static/index.css';
import Home from './components/Home/Home';

import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact';
import Publications from './components/Publications/Publications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Publications/>
      <Projects/>
      <Awards/>
      <Contact/>
    </main>
    

  </React.StrictMode>
);
