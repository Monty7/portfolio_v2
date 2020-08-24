import React from 'react';
import PortfolioContainer from './portfolio_components/PortfolioContainer'
import './App.css';

function App() {
  return (
    <main className="App">
      
        <header className="App-header">
          <div className="Heading-txt">
            <h1>Montensia Banks</h1>
            <h2>Software Engineer</h2>
          </div>
        </header>
          <PortfolioContainer />
    </main>
  )
}

export default App;
