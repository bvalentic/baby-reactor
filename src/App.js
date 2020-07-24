import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';
import { SprkButton } from '@sparkdesignsystem/spark-react';
import HighScores from './components/HighScores/HighScores';
import Landing from './components/Landing/Landing';
import Game from './components/Game/Game'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <SprkButton variant="secondary">
              Home
            </SprkButton>
          </Link>
        </div>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/play" component={Game} />
          <Route path="/high-scores" component={HighScores} />
        </div>
      </div>
      
    </Router>
  );
}

export default App;
