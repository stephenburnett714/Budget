import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import ResultsNav from './components/ResultsNav';
import SearchWidget from './components/SearchWidget';

function App() {
  return (
    <div className="App">
      <SearchWidget />
    </div>
  );
}

export default App;
