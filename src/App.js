import React from 'react';

import { Header } from './components/Header';
import { Links } from './components/Links'; 
import './App.css';

function App() {

  // variable, set variable = useState();
  //const [text, setText] = useState('hello bob');

  return (
    <div>
      <Header />
      <Links />
    </div>
  );
}

export default App;
