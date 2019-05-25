import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavigationBar />
      </Router>
    </div>
  );
}

export default App;
