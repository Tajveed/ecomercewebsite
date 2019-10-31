import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const SHIRTS = () => (
  <div>
    <h1>SHIRTS</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shirts' component={SHIRTS} />
      </Switch>
    </div>
  );
}

export default App;
