import { useState } from 'react';
import './App.css';
import Header from './components/header';
import TrendNews from './pages/trendNews';

function App() {


  return (
    <div className="App">
      <Header />
      <TrendNews />
    
    </div>
  );
}

export default App;
