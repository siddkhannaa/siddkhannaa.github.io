import React from 'react';

import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Links } from './components/Links'; 
import { Footer } from './components/Footer';

import './App.css';

function App() {

  // variable, set variable = useState();
  //const [text, setText] = useState('hello bob');

  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
