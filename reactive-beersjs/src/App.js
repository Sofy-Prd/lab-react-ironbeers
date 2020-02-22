import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Beers from './components/Beers.js'
import RandomBeers from './components/Randombeer.js'
import HomePage from './components/HomePage.js'
import SingleBeer from './components/SingleBeer.js'
import NewBeer from './components/NewBeer.js'


function App() {
  return (
    <div className="App">

     <Switch>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/random-beer" component={RandomBeers} />
          <Route exact path="/new-beer" component={NewBeer} />

          <Route exact path="/" component={HomePage}/>
          <Route exact path="/beers/:id" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
